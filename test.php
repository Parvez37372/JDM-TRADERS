<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TranslateX Animation</title>
  
         <style>
         	body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.animated-box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    animation: moveX 3s infinite alternate;
}

@keyframes moveX {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(300px);
    }
}

         </style>


</head>
<body>
    <div class="animated-box"></div>
</body>
</html>
