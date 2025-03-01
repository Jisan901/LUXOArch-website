<script setup>
import { inject, onMounted, onUnmounted, ref } from "vue";
import SunEditor from "suneditor";
import "suneditor/dist/css/suneditor.min.css";
import plugins from 'suneditor/src/plugins'
import { supabase } from "@/config/supabase";
import { useRoute, useRouter } from "vue-router";





const editorRef = ref(null);

const isLoading = ref(false)
const route = useRoute();
const updateId = route.query.update;


const {getProjectById,updateProject,fetchProjects } = inject('projects')
const defaultData = getProjectById(updateId)

const router = useRouter();

function navigateToBack() {
  router.replace('/dashboard/projects/'); // Navigate to 'profile' without adding to history
}


const uploadImagesToSupabase = async (files, info, core, uploadHandler) => {
  if (!files.length) { uploadHandler({result:[]}); return};


  const uploadedFiles = [];

  for (const file of files) {
    const filePath = `uploads/${Date.now()}_${file.name}`;
    
    const { data, error } = await supabase.storage.from('banners').upload(filePath, file);

    if (error) {
      console.error('Upload failed:', error);
      uploadHandler({ errorMessage: `Upload failed for ${file.name}` });
      continue; // Skip to the next file
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage.from('banners').getPublicUrl(filePath);

    if (!publicUrlData.publicUrl) {
      uploadHandler({ errorMessage: `Failed to get URL for ${file.name}` });
      continue;
    }

    uploadedFiles.push({ url: publicUrlData.publicUrl, name: file.name });
  }

  if (uploadedFiles.length > 0) {
    uploadHandler({ result: uploadedFiles });
  }
};

const initializeEditor = () => {
    editorRef.value = SunEditor.create(document.getElementById("editor"), {
        height: 300,
        plugins,
        buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            '/', // Line break
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list', 'lineHeight'],
            ['table', 'link', 'image','video'/** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
            ['showBlocks', 'codeView'],
            ['preview', 'print']
            /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
        ],
        value:defaultData?.value?.content??""
    });
    editorRef.value.onImageUploadBefore = uploadImagesToSupabase
    
}
onMounted(() => {
    initializeEditor()
})
onUnmounted(()=>{
    editorRef.value.onImageUploadBefore = null
    editorRef.value.destroy()
})

const handleSubmit = (e)=>{
  isLoading.value = true
  const split_urls = e.target.bannersurl.value.split(',');
  const data = {
    title:(e.target.title.value),
    description:(e.target.description.value),
    content:(editorRef.value.getContents(true))
    }
    // it is doing its best
    uploadImagesToSupabase(e.target.banner.files, null, null,({result})=>{
        data.banners = result.map(file => file.url);
        //if(data.banners.length===0) delete data.banners
        data.banners = [...new Set([...data.banners, ...(defaultData.banners??[]), ...split_urls])] // merge previous banners
        if (updateId) {
          updateProject(updateId,data)
          isLoading.value=false
          navigateToBack()
          return
        }
        addProject(data);
        navigateToBack()
    })
// if update happens previous block it wont't execute
    if (updateId) {
          updateProject(updateId,data)
          isLoading.value = false
          navigateToBack()
          return
    }


    
}

async function addProject(fdata) {
  const { data, error } = await supabase
    .from("projects")
    .insert([
      fdata
    ]);
    fetchProjects()
  isLoading.value = false
  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Inserted:", data);
  }
}


</script>
<template>
    <div class="w-full">
        <div class="my-7 mx-6 flex justify-between items-center">
            <h1 class="text-4xl font-bold">Editor</h1>
        </div>
        <form @submit.prevent="handleSubmit" class="m-6 rounded-lg flex flex-col">
            <input :value="defaultData?.title" required type="text" placeholder="Title" class="input input-bordered w-full my-4" name="title" />
            <textarea :value="defaultData?.description" required class="textarea textarea-bordered w-full" placeholder="Small description for card" name="description"></textarea>
            <img title="previous banner" class="w-40 my-4" v-if="updateId" :src="defaultData?.banners[0]" alt="bnner">
            <label class="form-control w-full max-w-xs mb-4">
                <div class="label">
                    <span class="label-text">Pick a file for banner</span>
                </div>
                <input multiple type="file" class="file-input  file-input-bordered w-full" name="banner" />
            </label>
            <label class="form-control hidden w-full max-w-xs mb-4">
                <div class="label">
                    <span class="label-text">Do not add anything on that field</span>
                </div>
                <input disabled  placeholder="urls,urls" :value="(defaultData.banners??[]).join(',')" type="text" class="input input-bordered w-full" name="bannersurl" />
            </label>
            <div id="editor"></div>
            <button :disabled="isLoading" type="submit" class="btn btn-primary btn-sm max-w-20 my-6">{{updateId?"Update":"Post"}}</button>
        </form>
    </div>
</template>
<style scoped>
.sun-editor .se-wrapper {
    z-index: 9999 !important;
}
</style>