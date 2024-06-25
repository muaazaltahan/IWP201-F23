$(document).ready(function() {
    $('.details-button').click(function() {
        var target = $(this).data('target');
        $('#' + target).toggleClass('hidden');
    });

    $('.continue-button').click(function() {
        var target = $(this).data('target');
        $('#' + target).toggleClass('hidden');
    });

    $('form').submit(function(event) {
        var form = $(this);
        var nationalId = form.find('input[name="national-id"]').val();
        var fullName = form.find('input[name="full-name"]').val();
        var phone = form.find('input[name="phone"]').val();
        var email = form.find('input[name="email"]').val();
        
        // تحقق من صحة الرقم الوطني
        var nationalIdPattern = /^(0[1-9]|1[0-4])[0-9]{9}$/;
        if (!nationalIdPattern.test(nationalId)) {
            alert("الرجاء إدخال رقم وطني صحيح");
            event.preventDefault();
            return;
        }

        // تحقق من صحة الاسم الكامل
        var fullNamePattern = /^[\u0621-\u064A ]+$/;
        if (fullName && !fullNamePattern.test(fullName)) {
            alert("الرجاء إدخال حروف هجائية فقط في الاسم الكامل");
            event.preventDefault();
            return;
        }

        // تحقق من صحة رقم الموبايل
        var phonePattern = /^(093|094|095)[0-9]{7}$/;
        if (phone && !phonePattern.test(phone)) {
            alert("الرجاء إدخال رقم موبايل صحيح");
            event.preventDefault();
            return;
        }

        // تحقق من صحة الإيميل
        if (email && !validateEmail(email)) {
            alert("الرجاء إدخال إيميل صحيح");
            event.preventDefault();
            return;
        }

        // يمكن إضافة التحقق من Captcha هنا
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
