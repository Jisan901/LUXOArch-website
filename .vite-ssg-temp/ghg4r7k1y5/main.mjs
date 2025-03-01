import { useSSRContext, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, onMounted, provide, resolveComponent, defineComponent, inject, toDisplayString, openBlock, createBlock, createCommentVNode, renderSlot, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useRoute, RouterLink, useRouter } from "vue-router";
import { createClient } from "@supabase/supabase-js";
import papaparse from "papaparse";
import "@emailjs/browser";
import { Cog8ToothIcon, UserIcon, CubeIcon, HomeIcon, InboxIcon, PlusIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import SunEditor from "suneditor";
import plugins from "suneditor/src/plugins/index.js";
import { ViteSSG } from "vite-ssg";
const logo1 = "/assets/logo-mr0mzXuV.png";
const logo2 = "/assets/logo-tr-DXpNGKKd.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$z = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const logo = ref(logo1);
    const route = useRoute();
    const navStyle = ref({
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(10px)",
      display: "flex",
      justifyContent: "space-between"
      /* padding: 1rem 2rem; */
    });
    const isLightTheme2 = computed(() => route.fullPath === "/at" || route.fullPath === "/prcts");
    watch(isLightTheme2, () => {
      if (isLightTheme2.value) {
        logo.value = logo2;
        navStyle.value = {
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "none",
          display: "flex",
          justifyContent: "space-between"
        };
      } else {
        logo.value = logo1;
        navStyle.value = {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "space-between"
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center items-center" }, _attrs))} data-v-29ba780f><div class="navbar fixed top-4 z-10 shadow-lg lg:rounded-full lg:w-[85%] mx-auto" style="${ssrRenderStyle(navStyle.value)}" data-v-29ba780f><div class="navbar-start" data-v-29ba780f><div class="dropdown" data-v-29ba780f><div tabindex="0" role="button" class="${ssrRenderClass([{ "text-black": isLightTheme2.value, "text-white": !isLightTheme2.value }, "btn btn-ghost lg:hidden"])}" data-v-29ba780f><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29ba780f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" data-v-29ba780f></path></svg></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" data-v-29ba780f><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "",
        to: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "",
        to: "/projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/",
        class: ["flex justify-center items-center text-xl ml-3 text-nowrap", { "text-black": isLightTheme2.value, "text-white": !isLightTheme2.value }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logo.value)} class="h-12 w-12" alt="logo" data-v-29ba780f${_scopeId}><div class="flex flex-col justify-start ml-2 font-bold" data-v-29ba780f${_scopeId}><span class="text-lg" data-v-29ba780f${_scopeId}>LuxoArch</span><span class="md:text-sm text-xs font-normal" data-v-29ba780f${_scopeId}>Design and Studio</span></div>`);
          } else {
            return [
              createVNode("img", {
                src: logo.value,
                class: "h-12 w-12",
                alt: "logo"
              }, null, 8, ["src"]),
              createVNode("div", { class: "flex flex-col justify-start ml-2 font-bold" }, [
                createVNode("span", { class: "text-lg" }, "LuxoArch"),
                createVNode("span", { class: "md:text-sm text-xs font-normal" }, "Design and Studio")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-end" data-v-29ba780f><div class="navbar-center hidden lg:flex" data-v-29ba780f><ul class="${ssrRenderClass([{ "text-black": isLightTheme2.value, "text-white": !isLightTheme2.value }, "menu menu-horizontal px-1"])}" data-v-29ba780f><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/",
        "exact-active-class": "text-primary focus:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        "active-class": "text-primary focus:text-primary",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        "active-class": "text-primary focus:text-primary",
        to: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        "active-class": "text-primary focus:text-primary",
        to: "/projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ba780f>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        "active-class": "text-primary focus:text-primary",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navigation.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-29ba780f"]]);
const _sfc_main$y = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<dialog${ssrRenderAttrs(mergeProps({
    id: "my_modal_1",
    class: "modal"
  }, _attrs))}><div class="modal-box max-w-96 bg-[var(--bg-color)] text-white">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modal.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$x = {
  __name: "Carousel",
  __ssrInlineRender: true,
  props: ["banners"],
  setup(__props) {
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel w-full relative overflow-hidden" }, _attrs))}><div class="carousel-item w-full"><img${ssrRenderAttr("src", __props.banners[activeIndex.value ?? 0])} class="w-full aspect-video"></div><div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><button class="btn btn-circle">❮</button><button class="btn btn-circle">❯</button></div></div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Carousel.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    let banners = ref(__props.data.banners);
    const title = ref(__props.data.title);
    const description = ref(__props.data.description);
    watch(() => __props.data, (newData) => {
      banners.value = newData.banners;
      title.value = newData.title;
      description.value = newData.description;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ className: "card bg-transparent  w-full mx-auto" }, _attrs))}><figure className="">`);
      _push(ssrRenderComponent(_sfc_main$x, { banners: unref(banners) }, null, _parent));
      _push(`</figure><div className="card-body items-center text-center"><h2 className="card-title">${ssrInterpolate(title.value)}</h2><p>${ssrInterpolate(description.value)}</p></div></div>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Card.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const supabaseUrl = "https://mjgikfkirztqkkztiydu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZ2lrZmtpcnp0cWtrenRpeWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MDY5OTksImV4cCI6MjA1NDA4Mjk5OX0.5A7z9uPOTdSRLtuhLQvS789hR1ZOUtf1bfHbAtm_07Q";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const _sfc_main$v = {
  __name: "ProjectsProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([]);
    const error = ref(null);
    const isLoading = ref(true);
    onMounted(fetchProjects);
    async function fetchProjects() {
      isLoading.value = true;
      const { data, error: fetchError } = await supabase.from("projects").select("*");
      if (fetchError) {
        console.error("Error fetching projects:", fetchError);
        error.value = fetchError;
      } else {
        projects.value = data;
      }
      isLoading.value = false;
    }
    async function updateProject(id, updates) {
      const { error: updateError } = await supabase.from("projects").update(updates).eq("id", id);
      if (updateError) {
        console.error("Error updating project:", updateError);
        return false;
      }
      await fetchProjects();
      return true;
    }
    async function deleteProject(id) {
      const { error: deleteError } = await supabase.from("projects").delete().eq("id", id);
      if (deleteError) {
        console.error("Error deleting project:", deleteError);
        return false;
      }
      projects.value = projects.value.filter((project) => project.id !== id);
      return true;
    }
    function getProjectById(id) {
      return computed(() => projects.value.find((project) => project.id === id) || null);
    }
    provide("projects", { projects, error, isLoading, getProjectById, updateProject, deleteProject, fetchProjects });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/config/ProjectsProvider.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const currentModalContentComponent = ref({});
    const setModalContent = (component) => {
      currentModalContentComponent.value = component;
    };
    provide("setModalContent", setModalContent);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_sfc_main$v, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouterView)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _imports_0$1 = "/assets/vid-BtlnDb_a.mp4";
const _sfc_main$t = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      document.getElementById("video").play();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-a2455f25><div class="hero bg-[var(--bg-color)] min-h-screen pr-0 w-full" data-v-a2455f25><div class="hero-content flex-col lg:flex-col p-0 max-w-full w-full max-h-screen overflow-hidden" data-v-a2455f25><video autoplay="1" id="video" muted loop playsinline="1" class="video"${ssrRenderAttr("src", _imports_0$1)} data-v-a2455f25></video><div class="p-6 w-full min-h-screen flex items-center flex-col justify-center bg-[rgba(0,0,0,0.5)] pt-32 text-center" data-v-a2455f25><span class="text-yellow-500" data-v-a2455f25>Your Vision, Our Expertise</span><h1 class="text-5xl text-white font-bold" data-v-a2455f25>Design Your Dream Home<br data-v-a2455f25> <span class="text-yellow-500" data-v-a2455f25>With LuxoArch</span></h1><p class="py-6 text-white block lg:w-1/2 mx-auto" data-v-a2455f25> LuxoArch Design &amp; Studio is a Building Design and Engineering services firm specializing in the residential sector– Houses, Duplex, Townhouses, NDIS, Granny &amp; Extensions. We offer comprehensive design and approval packages for all types of developments. </p>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/projects",
        class: "btn btn-primary hover:bg-yellow-500 btn-outline rounded-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SEE OUR PROJECTS`);
          } else {
            return [
              createTextVNode("SEE OUR PROJECTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></main>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-a2455f25"]]);
const _imports_0 = "/assets/07-DZYQnAh-.jpg";
const _imports_1 = "/assets/01-Lti_uiJs.jpg";
const _imports_2 = "/assets/FERDOUS-DDJDsexR.jpg";
const _sfc_main$s = {
  __name: "WhyTOItem",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "flex items-center lg:col-span-1" }, _attrs))}><div class="flex-shrink-0"><svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><p class="ml-3 leading-5 text-sm text-gray-100">${ssrInterpolate(__props.title)}</p></li>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WhyTOItem.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "AboutView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><div class="flex justify-center flex-col lg:flex-row px-4 lg:px-0 min-h-screen lg:h-screen pb-5 pt-[88px] bg-[var(--bg-color)]"><div class="w-full lg:w-[23%] h-full flex flex-col items-center justify-center"><img class="w-full h-[40%]"${ssrRenderAttr("src", _imports_0)} alt="about"><img class="w-full h-[40%] mt-2"${ssrRenderAttr("src", _imports_1)} alt="about"></div><div class="w-full lg:w-[25%] flex flex-col justify-evenly bg-[var(--bg-color)] p-4 overflow-scroll"><h1 class="text-4xl text-white">About us</h1><p class="text-white text-sm mt-4">LuxoArch Design and Studio is an Australian-based firm offering complete building design and engineering services for residential projects – Houses, Duplex, Townhouses, NDIS, Granny &amp; Extensions. We pride ourselves on being a true ‘onestop shop,’ guiding clients seamlessly through the entire process from initial design to final approval.</p><p class="text-white text-sm mt-4">Our team of experienced architects and engineers work collaboratively to deliver innovative and sustainable solutions tailored to each client&#39;s unique needs. We believe in creating spaces that are not only functional but also aesthetically pleasing, ensuring that every project we undertake is a true reflection of our client&#39;s vision and lifestyle.</p>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/services",
        class: "btn btn-primary mt-2 btn-outline hover:bg-yellow-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Services`);
          } else {
            return [
              createTextVNode("Our Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full lg:w-[31%] h-full flex flex-col items-center justify-center"><img class="w-full h-[50%]"${ssrRenderAttr("src", _imports_2)} alt="about"><div class="w-full p-4"><span class="text-yellow-500 uppercase">Explore </span><h1 class="text-3xl text-base-200 font-bold">Our creation</h1><p class="text-1xl text-base-300"> Take a look on our projects to see the diverse range of projects we have successfully completed. </p>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/allprojects",
        class: "btn btn-primary bg-yellow-500 mt-2 uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore`);
          } else {
            return [
              createTextVNode("Explore")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="container mx-auto mt-6"><p class="text-base font-semibold leading-6 text-yellow-500 uppercase"> Why Choose </p><h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-100 sm:text-3xl sm:leading-9"> LuxoArch Design and Studio </h4><ul class="mt-8 space-y-3 font-medium">`);
      _push(ssrRenderComponent(_sfc_main$s, { title: "Creative Excellence: We infuse creativity into every residential design, giving your home a uniqueand personal touch." }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$s, { title: "Residential Expertise: Our team specializes in crafting dream homes, making us your ideal partner for residential architectural design" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$s, { title: "Attention to Detail: We leave no detail overlooked, ensuring your home is a masterpiece of craftsmanship." }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$s, { title: "Clear Communication: We prioritize open and transparent communication, keeping you informed and engaged throughout the design process." }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$s, { title: "Timely Delivery: We understand the importance of delivering your dream home on time, and we're committed to making that a reality" }, null, _parent));
      _push(`</ul></div><!--]-->`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-full flex justify-center items-center" }, _attrs))}><span class="loading loading-bars loading-lg text-primary"></span></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Loading.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$p = {
  __name: "ProjectsView",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects, isLoading } = inject("projects");
    const my_modal_1 = ref(null);
    inject("setModalContent");
    onMounted(async () => {
      my_modal_1.value = document.getElementById("my_modal_1");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-[68px] w-full bg-[var(--bg-color)]" }, _attrs))}>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else {
        _push(`<div class="w-full"><div class="w-full"><div class="container mx-auto px-4 py-8"><span class="block text-center text-xs text-primary">DISCOVER</span><h1 class="text-center text-white text-5xl my-4">OUR PROJECTS</h1>`);
        if (unref(projects)[0]) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="md:col-span-2 md:row-span-2 relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_a = unref(projects)[0]) == null ? void 0 : _a.banners[0])} alt="Nature" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h3 class="text-2xl font-bold text-white">${ssrInterpolate((_b = unref(projects)[0]) == null ? void 0 : _b.title)}</h3><p class="text-white">${ssrInterpolate(((_c = unref(projects)[0]) == null ? void 0 : _c.description.substring(0, 40)) + "...")}</p></div></div></div><div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_d = unref(projects)[1]) == null ? void 0 : _d.banners[0])} alt="Food" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_e = unref(projects)[1]) == null ? void 0 : _e.title)}</h4></div></div></div><div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_f = unref(projects)[2]) == null ? void 0 : _f.banners[0])} alt="Technology" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_g = unref(projects)[2]) == null ? void 0 : _g.title)}</h4></div></div></div><div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_h = unref(projects)[3]) == null ? void 0 : _h.banners[0])} alt="Travel" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_i = unref(projects)[3]) == null ? void 0 : _i.title)}</h4></div></div></div><div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_j = unref(projects)[4]) == null ? void 0 : _j.banners[0])} alt="Art" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_k = unref(projects)[4]) == null ? void 0 : _k.title)}</h4></div></div></div>`);
          if ((_l = unref(projects)[5]) == null ? void 0 : _l.banners.length) {
            _push(`<div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_m = unref(projects)[5]) == null ? void 0 : _m.banners[0])} alt="Art" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_n = unref(projects)[5]) == null ? void 0 : _n.title)}</h4></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_o = unref(projects)[6]) == null ? void 0 : _o.banners.length) {
            _push(`<div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_p = unref(projects)[6]) == null ? void 0 : _p.banners[0])} alt="Art" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_q = unref(projects)[6]) == null ? void 0 : _q.title)}</h4></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_r = unref(projects)[7]) == null ? void 0 : _r.banners.length) {
            _push(`<div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_s = unref(projects)[7]) == null ? void 0 : _s.banners[0])} alt="Art" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_t = unref(projects)[7]) == null ? void 0 : _t.title)}</h4></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_u = unref(projects)[8]) == null ? void 0 : _u.banners.length) {
            _push(`<div class="relative overflow-hidden someREplacementforlater shadow-lg group"><img${ssrRenderAttr("src", (_v = unref(projects)[8]) == null ? void 0 : _v.banners[0])} alt="Art" class="w-full h-48 object-cover"><div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h4 class="text-xl font-bold text-white">${ssrInterpolate((_w = unref(projects)[8]) == null ? void 0 : _w.title)}</h4></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full flex justify-center items-center">`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/allprojects",
          class: "btn btn-primary rounded-full mx-auto my-5 uppercase tracking-widest"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View all`);
            } else {
              return [
                createTextVNode("View all")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ProjectsView.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "ClientServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([]);
    const isLoading = ref(true);
    onMounted(async (e) => {
      const fileUrl = "https://luxoarch.github.io/assets/services.csv";
      const res = await fetch(fileUrl);
      const data = await res.text();
      const parsed = papaparse.parse(data, { header: true });
      services.value = parsed.data;
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 bg-[var(--bg-color)] text-gray-100 pt-24" }, _attrs))}><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="max-w-xl mx-auto text-center xl:max-w-2xl"><h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">What we Offer? </h2><p class="mb-4">We are provide complete solution on design and architecture that helps you be more productive and efficient when building your dream.</p></div>`);
      if (isLoading.value) {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else {
        _push(`<div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left"><!--[-->`);
        ssrRenderList(services.value, (service) => {
          _push(`<div class="relative">`);
          if (service.service) {
            _push(`<!--[--><div class="absolute -inset-1"><div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div></div><div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full"><div class="p-9"><img class="w-12 h-12 mx-auto text-gray-400 sm:mx-0"${ssrRenderAttr("src", service.icon)} alt="icon"><h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">${ssrInterpolate(service.service)}</h3><p class="mt-6 text-base text-gray-600">${ssrInterpolate(service.description)}</p></div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ClientServices.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "ServicesView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$o)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ServicesView.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "ContactView",
  __ssrInlineRender: true,
  setup(__props) {
    const isSending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-400 bg-[var(--bg-color)] body-font relative" }, _attrs))}><div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"><div class="lg:w-2/3 md:w-1/2 bg-[var(--bg-color)] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"><iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.777326569421!2d151.0344867748133!3d-33.92113012176962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd588a283095%3A0x76720e4cb927cff8!2sLuxoarch%20Design%20%26%20Studio!5e0!3m2!1sen!2sbd!4v1735184927575!5m2!1sen!2sbd" style="${ssrRenderStyle({ "filter": "grayscale(1) contrast(1.2) opacity(0.16)" })}"></iframe><div class="bg-[var(--bg-color)] relative flex flex-wrap py-6 rounded shadow-md"><div class="lg:w-1/2 px-6"><h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2><p class="mt-1">12 Gratwick Mews, Edmondson Park, NSW 2174, Australia</p></div><div class="lg:w-1/2 px-6 mt-4 lg:mt-0"><h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2><a href="mailto:info@luxoarch.com.au" class="text-yellow-400 leading-relaxed">info@luxoarch.com.au</a><h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2><a class="leading-relaxed" href="tel:0426235095">0426 235 095</a></div></div></div><form class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"><h2 class="text-white text-lg mb-1 font-medium title-font">Get in touch.</h2><p class="leading-relaxed mb-5">To discuss your next project, reach out to us via email or phone to chat</p><div class="relative mb-4"><label for="name" class="leading-7 text-sm text-gray-400">Name</label><input required type="text" id="name" name="name" placeholder="Enter your Name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="name" class="leading-7 text-sm text-gray-400">Phone</label><input required type="tel" id="phone" name="phone" placeholder="Enter your Phone" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="email" class="leading-7 text-sm text-gray-400">Email</label><input required type="email" id="email" name="email" placeholder="Enter your Email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="message" class="leading-7 text-sm text-gray-400">Message</label><textarea required id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Describe Project details, services etc"></textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSending.value) ? " disabled" : ""} class="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg disabled:grayscale disabled:cursor-wait">Submit</button><p class="text-xs text-gray-400 text-opacity-90 mt-3">Complete the enquiry form and a member of our team will be in touch as soon as possible.</p></form></div></section>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ContactView.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "SinglePageView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(HomeView, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$r, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/SinglePageView.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "ClientProjects",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects, isLoading } = inject("projects");
    onMounted(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 pt-[68px] bg-[var(--bg-color)] text-neutral-content" }, _attrs))}><h2 class="text-4xl border-b-4 border-primary inline-block">Projects</h2>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else {
        _push(`<div class="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full min-h-screen mt-4"><!--[-->`);
        ssrRenderList(unref(projects), (project) => {
          _push(`<div>`);
          if (project.title) {
            _push(`<div className="card bg-transparent max-w-96 mx-auto bg-base-100 shadow-lg shadow-gray-900"><figure className="px-10 pt-10">`);
            _push(ssrRenderComponent(_sfc_main$x, {
              banners: project.banners
            }, null, _parent));
            _push(`</figure>`);
            _push(ssrRenderComponent(_component_RouterLink, {
              to: `/project/${project.id}`,
              className: "card-body items-center text-center"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h2 className="card-title"${_scopeId}>${ssrInterpolate(project.title)}</h2><p${_scopeId}>${ssrInterpolate(project.description)}</p>`);
                } else {
                  return [
                    createVNode("h2", { className: "card-title" }, toDisplayString(project.title), 1),
                    createVNode("p", null, toDisplayString(project.description), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ClientProjects.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "AllProjects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$k)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AllProjects.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><h1 class="text-4xl m-6">Welcome admin</h1></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Dashboard.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender]]);
const isLightTheme = false;
const _sfc_main$h = {
  __name: "Footerv3",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const logo = ref(logo1);
    watch(isLightTheme, () => {
      if (isLightTheme.value) {
        logo.value = logo2;
      } else {
        logo.value = logo1;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["footer footer-center p-10", { "bg-white text-black": isLightTheme, "bg-[var(--bg-color)] text-white": !isLightTheme }]
      }, _attrs))}><nav><div class="grid grid-flow-col gap-4"><a><svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path></svg></a><a href="https://www.facebook.com/share/GFLhBoEMBEuLf4Na/?mibextid=wwXIfr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a><a href="mailto:info@luxoarch.com.au"><svg class="fill-none stroke-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        class: "btn btn-primary bg-yellow-500 text-gray-950 btn-sm mt-4",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in touch`);
          } else {
            return [
              createTextVNode("Get in touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><aside><p>Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} LuxoArch Design &amp; Studio<br> ABN 67 373 843 627</p></aside></footer>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footerv3.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "DefaultLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const currentModalContentComponent = ref({});
    const setModalContent = (component) => {
      currentModalContentComponent.value = component;
    };
    provide("setModalContent", setModalContent);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Navigation, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Modal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = currentModalContentComponent.value) == null ? void 0 : _a.title) {
                    _push3(ssrRenderComponent(_sfc_main$w, { data: currentModalContentComponent.value }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_b = currentModalContentComponent.value) == null ? void 0 : _b.title) ? (openBlock(), createBlock(_sfc_main$w, {
                      key: 0,
                      data: currentModalContentComponent.value
                    }, null, 8, ["data"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Navigation),
              createVNode(Modal, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = currentModalContentComponent.value) == null ? void 0 : _a.title) ? (openBlock(), createBlock(_sfc_main$w, {
                      key: 0,
                      data: currentModalContentComponent.value
                    }, null, 8, ["data"])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$h, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$h)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/DefaultLayout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "CustomLi",
  __ssrInlineRender: true,
  props: {
    link: String,
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "list-none w-full py-2 flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: __props.link,
        class: "flex w-full gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("span", null, toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CustomLi.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Bottom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><hr class="my-2">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        text: "Settings",
        link: "/dashboard/settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Cog8ToothIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cog8ToothIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Drawer/Bottom.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "UserData",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = inject("auth");
    console.log(auth.user);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-center items-center text-center gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(UserIcon), {
        referrerPolicy: "no-referrer",
        src: (_b = (_a = unref(auth)) == null ? void 0 : _a.user) == null ? void 0 : _b.photoURL,
        alt: "User Avatar",
        class: "h-12 w-12 rounded-full"
      }, null, _parent));
      _push(`<h3 class="text-2xl">Admin</h3><p class="text-xs">${ssrInterpolate(unref(auth).user.value.email)}</p><button class="btn btn-primary btn-sm">Logout</button></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Drawer/UserData.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "Top",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<hr class="my-4">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        text: "Projects",
        link: "/dashboard/projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CubeIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CubeIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$f, {
        text: "Website",
        link: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HomeIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HomeIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$f, {
        text: "Inbox",
        link: "/dasboard/inbox"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(InboxIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(InboxIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Drawer/Top.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ className: "drawer lg:drawer-open" }, _attrs))}><input id="main-drawer" type="checkbox" className="drawer-toggle"><div className="z-[0] drawer-content overflow-x-auto flex flex-col w-[calc(100% - 256px)] bg-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div className="drawer-side"><label htmlFor="main-drawer" className="drawer-overlay"></label><ul className="z-[1] menu menu-hover-none p-4 w-64 h-full bg-base-200 text-base-content justify-between">`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</ul></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Drawer.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "AuthProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const user = ref(null);
    const loading = ref(true);
    const isError = ref(null);
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        user.value = data.user;
      } catch (error) {
        isError.value = error.message;
      } finally {
        loading.value = false;
      }
    };
    supabase.auth.onAuthStateChange((_, session) => {
      user.value = (session == null ? void 0 : session.user) || null;
      loading.value = false;
    });
    const logOut = async () => {
      await supabase.auth.signOut();
      user.value = null;
    };
    onMounted(fetchUser);
    provide("auth", { user, loading, logOut });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/config/AuthProvider.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "FormHeader",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:mx-auto sm:w-full sm:max-w-md pb-8" }, _attrs))}><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">${ssrInterpolate(__props.title)}</h2></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/FormHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "FormInput",
  __ssrInlineRender: true,
  props: ["inputLabel", "placeholder", "id", "type"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", __props.id)} class="block text-sm font-medium text-gray-700">${ssrInterpolate(__props.inputLabel)}</label><div class="mt-1"><input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("name", __props.id)}${ssrRenderAttr("type", __props.type)} required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"${ssrRenderAttr("placeholder", __props.placeholder)}></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/FormInput.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const error = ref(null);
    const isLoading = ref(false);
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md min-h-screen flex justify-center items-center" }, _attrs))}><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`);
      _push(ssrRenderComponent(_sfc_main$9, { title: "Welcome back" }, null, _parent));
      _push(`<form class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "input-label": "Email address",
        placeholder: "Enter your email address",
        type: "email",
        id: "email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        "input-label": "Password",
        placeholder: "Enter your password",
        type: showPassword.value ? "text" : "password",
        id: "password"
      }, null, _parent));
      _push(`<div class="flex items-center justify-between"><div class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(showPassword.value) ? ssrLooseContain(showPassword.value, null) : showPassword.value) ? " checked" : ""} id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"><label for="remember_me" class="ml-2 block text-xs text-gray-900"> Show password </label></div><div class="text-xs"><a href="/forget_password" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a></div></div>`);
      if (error.value) {
        _push(`<p class="text-red-500 text-sm">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale"> Sign in </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SignIn.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ProtectedRoute",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, loading } = inject("auth");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else if (!unref(user)) {
        _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/router/ProtectedRoute.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DashboardLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_sfc_main$a, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_RouterView, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_RouterView)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, null, {
                      default: withCtx(() => [
                        createVNode(_component_RouterView)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, null, {
                    default: withCtx(() => [
                      createVNode(_component_RouterView)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/DashboardLayout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProjectsTable",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects, isLoading, deleteProject } = inject("projects");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="my-7 mx-6 flex justify-between items-center"><h1 class="text-4xl font-bold">Projects</h1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/dashboard/projects/edit",
        class: "btn btn-success btn-sm text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PlusIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            _push2(`ADD PROJECT`);
          } else {
            return [
              createVNode(unref(PlusIcon), { class: "w-6 h-6" }),
              createTextVNode("ADD PROJECT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="overflow-x-auto mx-6 border rounded-lg">`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else {
        _push(`<table class="table"><thead><tr class="bg-slate-200"><th></th><th>Title</th><th>Description</th><th>Actions</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(projects), (project, index) => {
          _push(`<tr><th>${ssrInterpolate(index + 1)}</th><td>${ssrInterpolate(project.title)}</td><td>${ssrInterpolate(project.description.substring(0, 20) + "...")}</td><td>`);
          _push(ssrRenderComponent(_component_RouterLink, {
            to: "/dashboard/projects/edit?update=" + project.id,
            class: "btn btn-info btn-sm text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(PencilIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(PencilIcon), { class: "w-6 h-6" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="btn btn-error btn-sm text-white ml-2">`);
          _push(ssrRenderComponent(unref(TrashIcon), { class: "w-6 h-6" }, null, _parent));
          _push(`</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Dashboard/ProjectsTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProjectsForm",
  __ssrInlineRender: true,
  setup(__props) {
    const editorRef = ref(null);
    const isLoading = ref(false);
    const route = useRoute();
    const updateId = route.query.update;
    const { getProjectById, updateProject, fetchProjects } = inject("projects");
    const defaultData = getProjectById(updateId);
    useRouter();
    const uploadImagesToSupabase = async (files, info, core, uploadHandler) => {
      if (!files.length) {
        uploadHandler({ result: [] });
        return;
      }
      const uploadedFiles = [];
      for (const file of files) {
        const filePath = `uploads/${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage.from("banners").upload(filePath, file);
        if (error) {
          console.error("Upload failed:", error);
          uploadHandler({ errorMessage: `Upload failed for ${file.name}` });
          continue;
        }
        const { data: publicUrlData } = supabase.storage.from("banners").getPublicUrl(filePath);
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
      var _a;
      editorRef.value = SunEditor.create(document.getElementById("editor"), {
        height: 300,
        plugins,
        buttonList: [
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["paragraphStyle", "blockquote"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor", "textStyle"],
          ["removeFormat"],
          "/",
          // Line break
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "lineHeight"],
          [
            "table",
            "link",
            "image",
            "video"
            /** ,'math' */
          ],
          // You must add the 'katex' library at options to use the 'math' plugin.
          /** ['imageGallery'] */
          // You must add the "imageGalleryUrl".
          ["showBlocks", "codeView"],
          ["preview", "print"]
          /** ['dir', 'dir_ltr', 'dir_rtl'] */
          // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
        ],
        value: ((_a = defaultData == null ? void 0 : defaultData.value) == null ? void 0 : _a.content) ?? ""
      });
      editorRef.value.onImageUploadBefore = uploadImagesToSupabase;
    };
    onMounted(() => {
      initializeEditor();
    });
    onUnmounted(() => {
      editorRef.value.onImageUploadBefore = null;
      editorRef.value.destroy();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-1a159d78><div class="my-7 mx-6 flex justify-between items-center" data-v-1a159d78><h1 class="text-4xl font-bold" data-v-1a159d78>Editor</h1></div><form class="m-6 rounded-lg flex flex-col" data-v-1a159d78><input${ssrRenderAttr("value", (_a = unref(defaultData)) == null ? void 0 : _a.title)} required type="text" placeholder="Title" class="input input-bordered w-full my-4" name="title" data-v-1a159d78><textarea required class="textarea textarea-bordered w-full" placeholder="Small description for card" name="description" data-v-1a159d78>${ssrInterpolate((_b = unref(defaultData)) == null ? void 0 : _b.description)}</textarea>`);
      if (unref(updateId)) {
        _push(`<img title="previous banner" class="w-40 my-4"${ssrRenderAttr("src", (_c = unref(defaultData)) == null ? void 0 : _c.banners[0])} alt="bnner" data-v-1a159d78>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="form-control w-full max-w-xs mb-4" data-v-1a159d78><div class="label" data-v-1a159d78><span class="label-text" data-v-1a159d78>Pick a file for banner</span></div><input multiple type="file" class="file-input file-input-bordered w-full" name="banner" data-v-1a159d78></label><label class="form-control hidden w-full max-w-xs mb-4" data-v-1a159d78><div class="label" data-v-1a159d78><span class="label-text" data-v-1a159d78>Do not add anything on that field</span></div><input disabled placeholder="urls,urls"${ssrRenderAttr("value", (unref(defaultData).banners ?? []).join(","))} type="text" class="input input-bordered w-full" name="bannersurl" data-v-1a159d78></label><div id="editor" data-v-1a159d78></div><button${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} type="submit" class="btn btn-primary btn-sm max-w-20 my-6" data-v-1a159d78>${ssrInterpolate(unref(updateId) ? "Update" : "Post")}</button></form></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Dashboard/ProjectsForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectsForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1a159d78"]]);
const _sfc_main$2 = {
  __name: "ResetPass",
  __ssrInlineRender: true,
  setup(__props) {
    const error = ref(null);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md min-h-screen flex justify-center items-center" }, _attrs))}><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`);
      _push(ssrRenderComponent(_sfc_main$9, { title: "Get Reset Email" }, null, _parent));
      _push(`<form class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "input-label": "Email address",
        placeholder: "Enter your email address",
        type: "text",
        id: "email"
      }, null, _parent));
      if (error.value) {
        _push(`<p class="text-red-500 text-sm">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale"> Send </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Dashboard/ResetPass.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ResetPassRes",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const error = ref(null);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md min-h-screen flex justify-center items-center" }, _attrs))}><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`);
      _push(ssrRenderComponent(_sfc_main$9, { title: "Reset Password" }, null, _parent));
      _push(`<form class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "input-label": "Password",
        placeholder: "Enter your new passsword",
        type: "text",
        id: "password"
      }, null, _parent));
      if (error.value) {
        _push(`<p class="text-red-500 text-sm">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale"> Reset </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Dashboard/ResetPassRes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SingleProject",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const projectId = route.params.id;
    const { getProjectById, isLoading } = inject("projects");
    const project = getProjectById(projectId);
    console.log(project);
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-neutral-content" }, _attrs))}><div class="max-w-3xl mx-auto"><div class="py-8"><h1 class="text-3xl font-bold mb-2">${ssrInterpolate(unref(project).title)}</h1><p class="text-gray-500 text-sm">${ssrInterpolate(unref(project).description)}</p></div>`);
        _push(ssrRenderComponent(_sfc_main$x, {
          banners: unref(project).banners
        }, null, _parent));
        _push(`<div ass="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">${unref(project).content ?? ""}</div><br></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/SingleProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: _sfc_main$r
  },
  {
    path: "/projects",
    name: "projects",
    component: _sfc_main$p
  },
  {
    path: "project/:id",
    name: "id",
    component: _sfc_main
  },
  {
    path: "/allprojects",
    name: "all projects",
    component: _sfc_main$j
  },
  {
    path: "/services",
    name: "services",
    component: _sfc_main$n
  },
  {
    path: "/contact",
    name: "contact",
    component: _sfc_main$m
  },
  {
    path: "/minecraft",
    name: "funnnnnnnnn",
    component: _sfc_main$l
  }
];
const routes = [
  {
    path: "/",
    name: "base",
    component: _sfc_main$g,
    children: mainRoutes
  },
  {
    path: "/dashboard",
    name: "dashboard layout",
    component: _sfc_main$5,
    children: [
      {
        path: "",
        name: "das",
        component: Dashboard
      },
      {
        path: "projects",
        name: "table",
        component: _sfc_main$4
      },
      {
        path: "projects/edit",
        name: "edit",
        component: ProjectsForm
      },
      {
        path: "settings",
        name: "reset",
        component: _sfc_main$2
      },
      {
        path: "reset_password",
        name: "reset ok",
        component: _sfc_main$1
      }
    ]
  },
  {
    path: "/forget_password",
    name: "forg",
    component: _sfc_main$2
  }
];
const createApp = ViteSSG(_sfc_main$u, { routes, scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: "smooth"
      // Optional for smooth scrolling
    };
  } else {
    return { top: 0 };
  }
} });
export {
  createApp
};
