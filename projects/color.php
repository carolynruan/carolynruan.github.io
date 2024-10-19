<html>  
   <body>
    <?php
    if (isset($_GET["hex-input"]) || 
    (isset($_GET["r-input"]) && isset($_GET["g-input"]) && isset($_GET["b-input"])) || 
    (isset($_GET["h-input"]) && isset($_GET["s-input"]) && isset($_GET["v-input"]))) 
    {      
        echo "Hi ". $_GET['hex-input'];
        echo "Age: ". $_GET['r-input']; " years old."; exit();
    }
    ?>
    </body>
</html>