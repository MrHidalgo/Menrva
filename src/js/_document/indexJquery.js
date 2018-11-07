

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   * @param selector
   */
  const selectReset = (selector) => {
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function(){
      var valOption = $(this).children('option:selected');

      if(valOption.val() !== '0') {
        $(this).prev('span').addClass("is-choose");
      }

      $(this).prev('span').html(valOption.text());
    });
  };
  /**
   *
   * @param selector
   */
  const initSelect = (selector) => {
    if (selector === undefined) {
      var selector = 'select';
    }

    selectReset(selector);

    $(selector).on('change', function () {
      selectReset(this);
    });
  };


  /**
   *
   */
  const initSearch = () => {
    $('[search-js]').on('input', (ev) => {
      const elem = $(ev.currentTarget),
        parent = elem.closest('.search');

      if(elem.val().length > 0) {
        parent.find('[search-drop-js]').slideDown(300);
      } else {
        parent.find('[search-drop-js]').slideUp(300);
      }
    });
  };


  /**
   *
   */
  const initBootstrapMethod = () => {
    $('[data-toggle="tooltip"]').tooltip();
  };


  /**
   *
   */
  const inputRangeInit = () => {
    $('input[type=range]').on('input', function (e) {
      let min = e.target.min,
        max = e.target.max,
        val = e.target.value;

      $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
      });
    }).trigger('input');
  };


  /**
   *
   */
  const initModalStatisticMenu = () => {
    $('.c-modal__hamburger').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      elem.closest(".c-modal").toggleClass('is-close');
    });
  };


  /**
   *
   */
  const initTableBtn = () => {
    $('.c-modal__table-td > a, .c-modal__table-th:first-child > a').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.c-modal__table-td > a, .c-modal__table-th:first-child > a').removeClass('is-active');
      elem.addClass('is-active');
    });
  };


  /**
   *
   */
  const initTableSort = () => {
    $('[table-sort-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      elem.toggleClass('is-sort');
    });
  };


  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // lib
    // callback
    initSelect();
    initSearch();
    initBootstrapMethod();
    inputRangeInit();
    initModalStatisticMenu();
    initTableBtn();
    initTableSort();
  };
  initJquery();
});

