
  
  $(document).ready(function() {
    $('img').click(function() {
        const altPic = $(this).attr('alt-pic');
        console.log('alt-pic is', altPic);

        // If you want to change the image source
        $(this).attr('src', altPic);
    });
});