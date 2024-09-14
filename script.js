$(document).ready(function() {
    // Cuando se haga clic en un elemento del menú con clase 'submenu'
    $('.submenu > a').click(function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        
        var $submenu = $(this).siblings('.dropdown');
        
        // Si el submenú está visible, lo ocultamos
        if ($submenu.is(':visible')) {
            $submenu.slideUp(300); // Desliza hacia arriba
        } else {
            // Desliza hacia abajo y mueve el contenido hacia abajo
            $submenu.slideDown(300, function() {
                // Ajustar el margen del contenido solo después de la animación
                $('section').animate({
                    marginTop: $submenu.outerHeight() + 30 // Ajusta el valor según el espacio que necesites
                }, 300);
            });
        }
    });
});
