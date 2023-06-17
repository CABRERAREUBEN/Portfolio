import React, { useEffect } from 'react';
import $ from 'jquery';
const StellerPage = () => {
    useEffect(() => {
        // smooth scroll
        $(".nav-link").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 700, function () {
                    window.location.hash = hash;
                });
            }
        });
    }, []); // Empty dependency array to run the effect only once


};

export default StellerPage;
