$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<div class="col-xxl-12 row">\
    <div class="col-md-12">\
        <div class="text-center">\
            <img src="assets/img/anxietyvl.webp" class="img-fluid,rounded-0" alt="treatment for anxiety improves overal wellbeint" oading="lazy" height="450" align="center">\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = '.row';
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});