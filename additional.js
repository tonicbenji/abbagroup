function changeBackLabels(selectBox) {
    jQuery('label[for="' + selectBox + '"] .label-desc').text(
        jQuery('#' + selectBox + ' > optgroup').attr('label')
    )
}

function formSubmit() {
    changeBackLabels('selectBox1');
    changeBackLabels('selectBox2');
    Cookies.set('justSubmitted', true, { expires: 1, path: '' });
    return true;
}

function selectOther(selectBox, otherField) {
    jQuery("#" + selectBox).change(function(){
        if(jQuery(this).val()=="other-please-specify") {
            jQuery("#" + otherField).show();
            jQuery("#" + otherField + " input[type=text]").prop('required', true);
            jQuery("#formBottomSpace").hide();
        } else {
            jQuery("#" + otherField).hide();
            jQuery("#" + otherField + " input[type=text]").prop('required', false);
            jQuery("#formBottomSpace").show();
        }
    })
}

selectOther("selectBox1", "interestedInOther");
selectOther("selectBox2", "hearAboutOther");

jQuery(document).ready(function () {
    function copyToText() {
        var box1 = jQuery('#nonHubspotTextarea');
        var box2 = jQuery('#nonHubspotText');
        box2.val(box1.val().replace(/(?:\r\n|\r|\n)/g, ' // '));
    }

    jQuery('#nonHubspotTextarea').on('keyup', copyToText);

    if (Cookies.get('justSubmitted')) {
        if (jQuery(window).width() < 782) {
            jQuery("#formSubmittedMobile").show();
        } else {
            jQuery("#formSubmitted").show();
        }
        Cookies.remove('justSubmitted', {path: ''});
    }

})

jQuery(document).mouseup(function (e) {
    var container = jQuery(".select-box");
}
);

jQuery("select").on("change" , function() {
    var selection = jQuery(this).find("option:selected").text(),
        labelFor = jQuery(this).attr("id"),
        label = jQuery("[for='" + labelFor + "']");
    label.find(".label-desc").html(selection);
});
