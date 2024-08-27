<?php
$servername = "localhost";
$username = "tu_usuario"; // Cambia a tu nombre de usuario de MySQL
$password = "tu_contraseña"; // Cambia a tu contraseña de MySQL
$dbname = "tienda_online";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener la consulta de búsqueda del formulario
$query = isset($_GET['query']) ? $_GET['query'] : '';

if (!empty($query)) {
    // Escapar caracteres especiales para prevenir inyecciones SQL
    $query = $conn->real_escape_string($query);

    // Consultar la base de datos para encontrar coincidencias
    $sql = "SELECT id, nombre, descripcion, precio, imagen_url, stock FROM productos 
            WHERE nombre LIKE '%$query%' OR descripcion LIKE '%$query%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Mostrar los productos encontrados
        while($row = $result->fetch_assoc()) {
            echo "<div class='col'>";
            echo "<div class='card' style='width: 18rem;'>";
            echo "<img src='" . $row["imagen_url"] . "' class='card-img-top' alt='" . $row["nombre"] . "'>";
            echo "<div class='card-body'>";
            echo "<h5 class='card-title'>" . $row["nombre"]. "</h5>";
            echo "<p class='card-text'>" . $row["descripcion"]. "</p>";
            echo "<p>Precio: $" . $row["precio"]. "</p>";
            echo "<p>Stock: " . $row["stock"]. "</p>";
            echo "<form method='POST' action='comprar.php'>";
            echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
            echo "<button type='submit' class='btn btn-primary'>Comprar</button>";
            echo "</form>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
        }
    } else {
        echo "<p>No se encontraron productos que coincidan con tu búsqueda.</p>";
    }
} else {
    echo "<p>Por favor, ingresa un término de búsqueda.</p>";
}

$conn->close();
?>

