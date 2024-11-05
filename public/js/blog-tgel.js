$("#togel-game").load("assets/components/games/togelgames.php");
$("#slot-game").load("assets/components/games/rtpslot.php");
$(document).ready(function() {
    $("#dindong-game").load("assets/components/games/dindong.php", function() {
        $('#menu-dindong').easyTicker({
            direction: 'up',
            easing: 'easeInOutBack',
            speed: 'fast',
            interval: 2000,
            height: 'auto',
            visible: 5,
            mousePause: 0,
        });
    });
});
$("#rtpslot").load("assets/components/games/rtpslot.php");
$("#last-result").load("assets/components/last-result.php");
$("#result-paito").load("assets/components/paito/default-paito.php");
$(document).ready(function() {
    $("#rtp-default").load("assets/components/slots/jojo.php");
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#Date').html("<span class='kuning'>" + dayNames[newDate.getDay()] + "</span>, " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    setInterval(function() {
        var seconds = new Date().getSeconds();
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);
    setInterval(function() {
        var minutes = new Date().getMinutes();
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);
    setInterval(function() {
        var hours = new Date().getHours();
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
    $("#selectpasaran").on('change', function() {
        var pasar = $(this).val();
        $.ajax({
            type: "GET",
            url: "assets/components/hasil-pasaran/getpasaran.php",
            data: {
                "pasaran": pasar
            },
            cache: false,
            beforeSend: function() {
                $('#loading').show();
                $('#result-pasaran').hide();
            },
            success: function(results) {
                $('#result-pasaran').show();
                $('#result-pasaran').html(results);
                $('#loading').hide();
            }
        })
    });
    $("#selectprediksi").on('change', function() {
        var pasar = $(this).val();
        $.ajax({
            type: "GET",
            url: "assets/components/prediksi/get-prediksi.php",
            data: {
                "pasaran": pasar
            },
            cache: false,
            beforeSend: function() {
                $('#loading').show();
                $('#prediksi-blocks').hide();
            },
            success: function(results) {
                if (results == 'none') {
                    $('#prediksi-blocks').show();
                    $('#prediksicontent').hide();
                    $('#loading').hide();
                    $('.paginate-pagination').show();
                    $('#pilihpass').text('Cari Pasaran');
                } else {
                    $('#prediksi-blocks').hide();
                    $('#prediksicontent').show();
                    $('#prediksicontent').html(results);
                    $('#loading').hide();
                    $('.paginate-pagination').hide();
                    $('#pilihpass').text('Lihat Semua');
                }
            }
        })
    });
    $("#selectlive").on('change', function() {
        var pasar = $(this).val();
        $.ajax({
            type: "GET",
            url: "assets/components/live-draw/get-livedraw.php",
            data: {
                "pasaran": pasar
            },
            cache: false,
            beforeSend: function() {
                $('#loading').show();
                $('#alllive').hide();
            },
            success: function(results) {
                if (results == 'none') {
                    $('#alllive').show();
                    $('#livecontent').hide();
                    $('#loading').hide();
                    $('#pililive').text('Cari Livedraw');
                } else {
                    $('#alllive').hide();
                    $('#livecontent').show();
                    $('#livecontent').html(results);
                    $('#loading').hide();
                    $('.paginate-pagination').hide();
                    $('#pililive').text('Lihat Semua');
                }
            }
        })
    });
    $("#selectpaito").on('change', function() {
        var pasar = $(this).val();
        $.ajax({
            type: "GET",
            url: "assets/components/paito/selected-paito.php",
            data: {
                "pasaran": pasar
            },
            cache: false,
            beforeSend: function() {
                $('#loading').show();
                $('#result-paito').hide();
            },
            success: function(results) {
                $('#result-paito').show();
                $('#result-paito').html(results);
                $('#loading').hide();
            }
        })
    });
    setInterval(function() {
        $("#livetoto-sgp").load("assets/components/konversi-totosgp/livetoto.php");
    }, 3000);
});
function openLivedraw(link) {
    window.open('assets/components/live-draw/' + link + '.php', 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=740,left = 80,top = 90');
}
$('.prediksi-sebelum').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<i class='fas fa-arrow-alt-circle-left'></i>", "<i class='fas fa-arrow-alt-circle-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
$("#inboxkeluhan").hide();
$('#ajukankeluhan').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'assets/components/keluhan/processkeluhan.php',
        data: $('#ajukankeluhan').serialize(),
        success: function(success) {
            document.getElementById("msg-keluhan").innerHTML = success;
            $('#ajukankeluhan').hide();
            $('#ttppesan').click(function() {
                location.reload();
            });
        }
    })
});
$("#showkeluhan").on("submit", function(x) {
    x.preventDefault();
    setInterval(function() {
        $.ajax({
            type: 'post',
            url: 'assets/components/keluhan/tampilkeluhan.php',
            data: $('#showkeluhan').serialize(),
            success: function(msg) {
                $("#inboxkeluhan").show();
                var messageid = document.getElementById("chatboxes");
                messageid.innerHTML = msg;
                messageid.scroll(0, messageid.scrollHeight)
            }
        })
    }, 1000);
});
$("#inboxkeluhan").on('submit', function(d) {
    d.preventDefault();
    $.ajax({
        type: 'post',
        url: 'assets/components/keluhan/sendkeluhan.php',
        data: $("#inboxkeluhan").serialize(),
        success: function() {
            $('#inboxmsgs').val("");
        }
    });
});
$(function() {
    var glower = $('.active-pasaran');
    window.setInterval(function() {
        glower.toggleClass('glowing');
    }, 300);
});
$("#showkeluhan").on("submit", function(t) {
    t.preventDefault();
    setInterval(function() {
        $.ajax({
            type: 'post',
            url: 'assets/components/keluhan/disablebtn.php',
            data: $('#showkeluhan').serialize(),
            success: function(dones) {
                $("#messagebox").html(dones);
            }
        })
    }, 1000);
});
$('#bukumimpi').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    startPosition: 'URLHash',
    navText: ["<span> <i class='fas fa-arrow-circle-left'></i> Sebelumnya</span>", "<span>Selanjutnya <i class='fas fa-arrow-circle-right'></i></span>"],
});
$(document).ready(function() {
    var btnUp = document.getElementById("btn-up");
    window.onscroll = function() {
        scrollUps();
    }
    function scrollUps() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btnUp.style.display = 'block';
        } else {
            btnUp.style.display = 'none';
        }
    }
    $("#btn-up").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "fast");
        return false;
    });
});
function removeBuku() {
    document.getElementById("bukuvalue").value = "";
    $('#bukumimpi').show();
    $('#resultmimpi').hide();
}
$("#bukuvalue").on("keyup", function() {
    var bukuValue = document.getElementById("bukuvalue");
    $.ajax({
        type: 'post',
        url: 'assets/components/bukumimpi/buku.php',
        data: $('#bukuvalue').serialize(),
        success: function(dones) {
            $("#resultmimpi").html(dones);
        }
    })
    if (bukuValue.value != "") {
        $('#bukumimpi').hide();
        $('#resultmimpi').show();
    } else {
        $('#bukumimpi').show();
        $('#resultmimpi').hide();
    }
});
function openMobilenav() {
    document.getElementById("navmobile").style.width = "250px";
    document.getElementById("mains").style.display = "none";
}
function clsMobilenav() {
    document.getElementById("navmobile").style.width = "0";
    document.getElementById("mains").style.display = "block";
}
function rtpGames(game) {
    document.getElementById("load-rtp").style.display = 'block';
    $.ajax({
        type: 'GET',
        data: 'game=' + game,
        url: 'assets/components/slots/pp.php',
        beforeSend: function() {
            $('#rtp-games').hide();
            $('#rtp-default').hide();
        },
        complete: function() {
            document.getElementById("load-rtp").style.display = 'none';
            $('#rtp-default').hide();
            $('#rtp-games').show();
        },
        success: function(data) {
            $('#rtp-games').html(data);
        }
    });
}
$("#buktijpsearch").on("keyup", function() {
    var panduanValue = document.getElementById("buktijpsearch");
    $.ajax({
        type: 'post',
        url: 'assets/components/bukti-jp/bukti-jp.php',
        data: $('#buktijpsearch').serialize(),
        success: function(dones) {
            $("#search-bukti").html(dones);
        }
    })
    if (panduanValue.value != "") {
        $('#post-bukti').hide();
        $('#search-bukti').show();
    } else {
        $('#post-bukti').show();
        $('#search-bukti').hide();
    }
});
$('#jadwal-table').DataTable();
const swiper = new Swiper('.slider-blog',{
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    lazy: {
        enabled: true,
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    on: {
        init: function() {
            var swiper = this;
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var slide = entry.target;
                        var img = slide.querySelector('.swiper-lazy');
                        img.src = img.dataset.src;
                        slide.classList.remove('swiper-lazy');
                        slide.classList.remove('swiper-lazy-loaded');
                        observer.unobserve(slide);
                    }
                });
            }
            );
            swiper.slides.forEach(function(slide) {
                observer.observe(slide);
            });
        }
    }
});
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("activez");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
$("#panduansearch").on("keyup", function() {
    var panduanValue = document.getElementById("panduansearch");
    $.ajax({
        type: 'post',
        url: 'assets/components/bukti-jp/panduan.php',
        data: $('#panduansearch').serialize(),
        success: function(dones) {
            $("#search-bukti").html(dones);
        }
    });
    if (panduanValue.value != "") {
        $('#post-bukti').hide();
        $('#search-bukti').show();
    } else {
        $('#post-bukti').show();
        $('#search-bukti').hide();
    }
});
