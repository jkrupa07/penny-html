export class Filter {
    init() {
        this.ProjectFilter();
    }
    ProjectFilter() {

        $(".filter-button").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    }
}