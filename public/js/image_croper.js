
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#reviewImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }

    $('#reviewImage').cropper({
        aspectRatio: 16 / 9,
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        }
    });
}

$("#imgInp").change(function(){
    readURL(this);
});

 $('#reviewImage1').cropper({
        aspectRatio: 1 / 1,
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        },
        autoCrop : false,
         ready: function () {
            // Do something here
            // ...

            // And then
            $(this).cropper('crop');
        }
    });