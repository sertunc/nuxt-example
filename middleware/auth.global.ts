export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware çalıştı");

  //   const isLoggedIn = false;
  //   if (isLoggedIn) {
  //     return navigateTo(to.fullPath);
  //   } else {
  //     return navigateTo("/login");
  //   }
});

//sayfa bazlı çalışması için auth.global.ts yerine saedce auth.ts yazıp ilgili sayfada çağırmak
//sayfada çağırmak için definePageMeta({ middleware: "auth" });
