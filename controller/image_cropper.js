const get_image_cropper = (req,res) => {
  res.render('image_croper', {title: 'Image Cropper'})
}


module.exports = {
    get_image_cropper,
}