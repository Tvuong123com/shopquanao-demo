/*  ---------------------------------------------------
    Template Name: codelean
    Description: codelean eCommerce HTML Template
    Author: CodeLean
    Author URI: https://CodeLean.vn/
    Version: 1.0
    Created: CodeLean
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Product Slider
    --------------------*/
   $(".product-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 4,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    /*------------------
       logo Carousel
    --------------------*/
    $(".logo-carousel").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        items: 5,
        dots: false,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        mouseDrag: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    
    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    console.log(timerdate);
    

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

        
    /*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
    $(document).ready(function(e) {
    //no use
    try {
        var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
            var val = data.value;
            if(val!="")
                window.location = val;
        }}}).data("dd");

        var pagename = document.location.pathname.toString();
        pagename = pagename.split("/");
        pages.setIndexByValue(pagename[pagename.length-1]);
        $("#ver").html(msBeautify.version.msDropdown);
    } catch(e) {
        // console.log(e);
    }
    $("#ver").html(msBeautify.version.msDropdown);

    //convert
    $(".language_drop").msDropdown({roundedBorder:false});
        $("#tech").data("dd");
    });
    /*-------------------
		Range Slider
	--------------------- */
	var rangeSlider = $(".price-range"),
		minamount = $("#minamount"),
		maxamount = $("#maxamount"),
		minPrice = rangeSlider.data('min'),
		maxPrice = rangeSlider.data('max');
	    rangeSlider.slider({
		range: true,
		min: minPrice,
        max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function (event, ui) {
			minamount.val('$' + ui.values[0]);
			maxamount.val('$' + ui.values[1]);
		}
	});
	minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*-------------------
		Radio Btn
	--------------------- */
    $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
        $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active');
        $(this).addClass('active');
    });
    
    /*-------------------
		Nice Select
    --------------------- */
    $('.sorting, .p-show').niceSelect();

    /*------------------
		Single Product
	--------------------*/
	$('.product-thumbs-track .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});

    $('.product-pic-zoom').zoom();
    
    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

    
    /*-------------------
		Login
	--------------------- */
    // main.js

$(document).ready(function() {
    // Xử lý sự kiện khi form đăng nhập được submit
    $('form').submit(function(e) {
        e.preventDefault(); // Ngăn chặn gửi form mặc định

        // Lấy giá trị username và password từ input
        var username = $('#username').val().trim();
        var password = $('#pass').val().trim();

        // Kiểm tra xem username và password có hợp lệ hay không (đây là ví dụ đơn giản, bạn cần thay thế bằng logic xác thực thực tế)
        if (username === 'admin' && password === 'admin123') {
            // Đăng nhập thành công
            alert('Login successful!');
            window.location.href = 'index.html'; // Chuyển hướng đến trang index.html
        } else {
            // Đăng nhập thất bại
            alert('Login failed. Please check your username and password.');
        }
    });
});

 /*-------------------
		Register
	--------------------- */

$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault(); 

        // Lấy giá trị từ các input
        var username = $('#username').val().trim();
        var password = $('#pass').val().trim();
        var confirmPassword = $('#con-pass').val().trim();

        // Kiểm tra các trường dữ liệu
        if (username === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.'); 
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.'); // Thông báo khi mật khẩu không khớp
            return;
        }

        alert('Registration successful!'); // Thông báo đăng ký thành công
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    });
});

/*-------------------
		Shopping-cart
	--------------------- */
// main.js

// Lắng nghe sự kiện khi bấm vào nút "Add to Cart"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.pd-card');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của form

            // Lấy thông tin sản phẩm từ DOM
            const product = this.closest('.product-shop'); // Đổi '.product-shop' thành lớp chứa nút Add to Card
            const productName = product.querySelector('.pd-title h3').innerText;
            const productPrice = product.querySelector('.pd-desc h4').innerText.split('$')[1].trim(); // Lấy giá bỏ dấu $
            const productImage = product.querySelector('.product-big-img').getAttribute('src');

            // Tạo một dòng mới trong giỏ hàng
            const cartItem = `
                <tr>
                    <td class="si-pic"><img src="${productImage}" alt=""></td>
                    <td class="si-text">
                        <div class="product-selected"></div>
                        <p>$${productPrice}</p>
                        <h6>${productName}</h6>
                    </td>
                    <td class="si-close">
                        <i class="ti-close"></i>
                    </td>
                </tr>
            `;

            // Thêm dòng mới vào cart-hover
            const cartHover = document.querySelector('.cart-hover .select-items tbody');
            cartHover.insertAdjacentHTML('beforeend', cartItem);

            // Cập nhật số lượng sản phẩm trên icon túi xách
            const cartIcon = document.querySelector('.cart-icon span');
            let currentCount = parseInt(cartIcon.innerText);
            cartIcon.innerText = currentCount + 1;
        });
    });
});

/*-------------------
		ti-close
	--------------------- */

    document.addEventListener('DOMContentLoaded', function() {
        // Lắng nghe sự kiện click trên các biểu tượng ti-close
        const closeButtonList = document.querySelectorAll('.si-close i.ti-close');
        
        closeButtonList.forEach(function(closeButton) {
            closeButton.addEventListener('click', function(event) {
                // Ngăn chặn hành vi mặc định của thẻ <i> (nếu có)
                event.preventDefault();
    
                // Tìm phần tử cha <tr> chứa sản phẩm cần xóa
                const productRow = this.closest('tr');
    
                // Xóa sản phẩm khỏi giỏ hàng
                if (productRow) {
                    productRow.remove(); 
                    updateCartTotal(); 
                    updateCartItemCount(); 
                }
            });
        });
    
        // Hàm cập nhật số lượng sản phẩm trên biểu tượng túi xách
        function updateCartItemCount() {
            const cartIcon = document.querySelector('.cart-icon a');
            if (!cartIcon) return; // Bảo đảm rằng biểu tượng túi xách tồn tại trong DOM
    
            // Đếm số lượng sản phẩm hiện có trong giỏ hàng
            const cartItems = document.querySelectorAll('.select-items table tbody tr');
            const itemCount = cartItems.length;
    
            // Cập nhật số lượng sản phẩm trên biểu tượng túi xách
            const itemCountElement = cartIcon.querySelector('span');
            if (itemCountElement) {
                itemCountElement.textContent = itemCount;
            }
        }
    
        // Hàm cập nhật tổng giá trị giỏ hàng (ví dụ)
        function updateCartTotal() {
            // Viết mã để cập nhật tổng giá trị giỏ hàng nếu cần
            // Ví dụ:
            const totalPriceElements = document.querySelectorAll('.select-total h5');
            let total = 0;
            totalPriceElements.forEach(function(totalPriceElement) {
                const priceString = totalPriceElement.textContent.replace('$', ''); // Loại bỏ ký tự '$'
                const price = parseFloat(priceString); // Chuyển đổi chuỗi thành số thực
                total += price;
            });
            console.log('Total Price:', total); // Cập nhật tổng giá trị vào UI hoặc làm thao tác tiếp theo
        }
    });

   

    

})(jQuery);