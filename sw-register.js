// We can say Service worker is a server(web proxy) running on client i.e on your browser using your browser's engine and runs on its own thread. At the end, everything is javascript this service worker is also just a piece of javascript code.

// Running on a seperate thread means not clash with your app's functionality i.e app's javascript file in our case it's script.js.

// More importantly what it offers is basically it act as a web proxy for your pwa.

// A web proxy is a type of watchman which basically monitors your web activiy i.e take decisions for you may or may not allow you to bypass certain resources(endpoints) and as a developer you decides what your web proxy i.e service worker can do. As far as this repo is concerned we are making our service worker capable of handling offline functionality i.e taking decisions on its own when app will have no access to the internet. By taking decision means check if application has access to internet or not, and if not, then show specific pages, may be a custom styled 404 page.

// navigator is a property of window object that contains information about browser. You can try consoling navigator i.e console.log(navigator).

// you will see a bunch of properties already there. what we are doing below, we are basically asking, hey browser i want to register a proxy(service worker), but before that it is important to check if your browser is having a functionality such as service worker because in some older versions window's navigator doesn't have service worker property and if it has, we use register method to register our actual service worker functionality i.e serviceworker.js .

// one of the important point is scope of the service worker i.e how much control a service worker has in our application. we registered service worker in index.html file i.e the root of our application, that means service worker has complete control of our application.

// There is more to know about service worker(i.e how, when i.e lifecycle of service worker) which we will see in the file containing actual sw logic i.e serviceworker.js file.

// main thread
// first check if browser has navigator.service worker. we can also write - if (navigator.serviceWorker)

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceworker.js")
    .then(() => {
      console.log("registration successfull");
    })
    .catch((err) => {
      console.log("registration failed oh NO!" + err);
    });
}
