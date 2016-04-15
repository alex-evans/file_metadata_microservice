'use strict';

(function() {
    var uploadButton = document.querySelector('#btn-upload');
    var apiUrl = 'https://file-metadata-microservice-alcatrats.c9users.io/'
    
    function showSize(data) {
        alert('FILE SIZE: ' + data.fileSize);
    }
    
    function ajaxRequest(method, url, callback) {
        var xmlhttp = new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp.response);
            }
        };
        
        xmlhttp.open(method, url, true);
        xmlhttp.send();
    }
    
    uploadButton.addEventListener('click', function() {
        ajaxRequest('POST', apiUrl, function() {
            ajaxRequest('GET', apiUrl, showSize);
        });
    }, false);
    
})