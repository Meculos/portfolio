/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    var certModal = document.getElementById('certModal');
    if (!certModal) return;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    certModal.addEventListener('show.bs.modal', function (event) {
        // event.relatedTarget is the element that triggered the modal
        var trigger = event.relatedTarget;
        var imgSrc = trigger.getAttribute('data-img') || '';
        var title = trigger.getAttribute('data-title') || '';

        var modalTitle = certModal.querySelector('.modal-title');
        var modalImg = certModal.querySelector('#certModalImg');
        var downloadBtn = certModal.querySelector('#certDownloadBtn');

        if (modalTitle) modalTitle.textContent = title;
        if (modalImg) {
        modalImg.src = imgSrc;
        modalImg.alt = title;
        }
        if (downloadBtn) {
        downloadBtn.href = imgSrc;
        }
    });

});
