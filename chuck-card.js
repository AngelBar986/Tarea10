Vue.component("chuck-card", {
    props: ["icon_url", "value"],
    template: `
    <div class="col-lg-4 col-md-6 col-12 mb-4 d-flex align-items-stretch">
        <div class="custom-card p-4 shadow-sm">
            <div class="text-center">
                <img :src="icon_url" class="avatar mb-3">
            </div>
            <p class="joke-text text-center">{{ value }}</p>
        </div>
    </div>
    `
});
