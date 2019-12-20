var use_yn = false
$(function() {
    $('.stats-bar').appear();
    //alert($('.stats-bar').appear());
    $('.stats-bar').on('appear', function() {
      var fx = function fx() {
        $(".stat-number").each(function (i, el) {

            var data = parseInt(this.dataset.n, 10);
            var props = {
                "from": {
                    "count": 0
                },
                    "to": {
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 1000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete:function() {
                    if (el.dataset.sym !== undefined) {
                      el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
            use_yn = true
        });
      };

      var reset = function reset() {
          //console.log("reset:::" + $(this).scrollTop() + "use_yn::" + use_yn )
          if ($(this).scrollTop() > 90 && !use_yn ) {
              //$(this).off("scroll");
            fx()
          }
      };

      $(window).on("scroll", reset);
  });
});


$('#kbstartersModal').on('shown.bs.modal', function () {
  //$('#kbstartersModal').show()
  $('#kbstartersModal').focus()
})
