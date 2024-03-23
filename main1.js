function zoomIn() {
  document.getElementById("zoomDiv").classList.remove("zoomed-out");
  document.getElementById("zoomDiv").classList.add("zoomed-in");
}

function zoomOut() {
  
  document.getElementById("zoomDiv").classList.remove("zoomed-in");
  document.getElementById("zoomDiv").classList.add("zoomed-out");
  

}
  
        function downloadAPK() {
            // Replace 'your_app.apk' with the actual name of your APK file
            var apkUrl = 'Calculator .apk';
            
            // Create a link element
            var downloadLink = document.createElement('a');
            downloadLink.href = apkUrl;
            downloadLink.download = 'your_app.apk';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to start the download
            downloadLink.click();

            // Remove the link from the body after the download starts
            document.body.removeChild(downloadLink);
        }
     function downloadAPK2() {
            // Replace 'your_app.apk' with the actual name of your APK file
            var apkUrl = 'Home.apk';
            
            // Create a link element
            var downloadLink = document.createElement('a');
            downloadLink.href = apkUrl;
            downloadLink.download = 'your_app.apk';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to start the download
            downloadLink.click();

            // Remove the link from the body after the download starts
            document.body.removeChild(downloadLink);
        }
function downloadAPK1() {
            // Replace 'your_app.apk' with the actual name of your APK file
            var apkUrl = 'S.Event.apk';
            
            // Create a link element
            var downloadLink = document.createElement('a');
            downloadLink.href = apkUrl;
            downloadLink.download = 'your_app.apk';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to start the download
            downloadLink.click();

            // Remove the link from the body after the download starts
            document.body.removeChild(downloadLink);
}
    
