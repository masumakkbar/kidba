// external js: isotope.pkgd.js

$(document).ready(function() {
    // init Isotope
    var $container = $('.popular-classes-wrapper').isotope({
      itemSelector: '.popular-class-item',
      layoutMode: 'fitRows',
    });
  
    // bind filter button click
    $('#filters').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      $container.isotope({
        filter: filterValue
      });
    });
    // change is-checked class on buttons
    $('.popular-class-buttons').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 3; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance
  
    loadMore(initShow); //execute function onload
  
    function loadMore(toShow) {
      $container.find(".hidden").removeClass("hidden");
  
      var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
        return item.element;
      });
      $(hiddenElems).addClass('hidden');
      $container.isotope('layout');
  
      //when no more to load, hide show more button
      if (hiddenElems.length == 0) {
        jQuery("#see-load-more").hide();
      } else {
        jQuery("#see-load-more").show();
      };
  
    }
    //when load more button clicked
    $("#see-load-more").click(function() {
      if ($('#filters').data('clicked')) {
        //when filter button clicked, set initial value for counter
        counter = initShow;
        $('#filters').data('clicked', false);
      } else {
        counter = counter;
      };
  
      counter = counter + initShow;
  
      loadMore(counter);
    });
  
    //when filter button clicked
    $("#filters").click(function() {
      $(this).data('clicked', true);
  
      loadMore(initShow);
    });
  
    
    
  });