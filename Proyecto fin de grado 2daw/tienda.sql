-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2022 a las 23:18:14
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `compras`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `IdCliente` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellidos` varchar(60) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `carrito` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`carrito`)),
  `Direccion` varchar(60) NOT NULL,
  `Codigo_postal` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`IdCliente`, `Nombre`, `Apellidos`, `Email`, `carrito`, `Direccion`, `Codigo_postal`) VALUES
(7, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(8, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(9, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(10, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datoscom`
--

CREATE TABLE `datoscom` (
  `id` int(11) NOT NULL,
  `titular` varchar(16) NOT NULL,
  `ntar` varchar(118) NOT NULL,
  `cod` varchar(118) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datoscom`
--

INSERT INTO `datoscom` (`id`, `titular`, `ntar`, `cod`) VALUES
(4, 'ppe', '$2y$10$2CCFkVQe/pmmGvk96D8Bf.NS9a6SqjdZ.XAH4QAZ3HpevebMH4CZ2', '$2y$10$.rHIDnNfbI3gwa2Hxwo/je6Vh0kDyVLraOoghkWXHk8rAP7T2XKZG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gerencia`
--

CREATE TABLE `gerencia` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(14) NOT NULL,
  `usuario` varchar(14) NOT NULL,
  `contrasena` varchar(118) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gerencia`
--

INSERT INTO `gerencia` (`id`, `Nombre`, `usuario`, `contrasena`) VALUES
(3, 'guillermo', 'admin', '$2y$10$dbSD3HOHWKe7GWSvytRw3eBRRiE1EDp8IFlW9NylDH5FqIyUbJ/SG'),
(4, 'miguel', 'miguel58', '$2y$10$34rzExyrUYY1r2lj2TcQvOJnbQI36d7Qe2d51/.uTHFpJhKEVCkuO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID_Articulo` int(11) NOT NULL,
  `Titulo` varchar(60) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID_Articulo`, `Titulo`, `Precio`, `Cantidad`) VALUES
(1, 'Star War Jedi Fallen Order', '50.00', 20),
(2, 'Star Wars Scuadrons', '35.00', 28),
(3, 'Star War Battlefront II', '45.00', 24),
(4, 'Star War Battlefront', '38.00', 40),
(5, 'Elite Dangerous', '26.00', 30),
(6, 'No Mans Sky', '58.00', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `ID_Articulo` int(11) NOT NULL,
  `Titulo` varchar(60) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `fecha_salida` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`ID_Articulo`, `Titulo`, `Precio`, `fecha_salida`) VALUES
(1, 'Starfield', '50.00', '2023'),
(2, 'Jedi survival', '60.00', '03/2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdRegistro` int(11) NOT NULL,
  `Nombre` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `Contrasena` varchar(118) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(60) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdRegistro`, `Nombre`, `Contrasena`, `Email`) VALUES
(1, 'pepe', '$2y$10$SUtQDYMgI/D4CIBHHvQ/neTF/NZTsg82VbLZgmeIjRUWWQ5lCjPWa', 'perico@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`IdCliente`);

--
-- Indices de la tabla `datoscom`
--
ALTER TABLE `datoscom`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID_Articulo`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`ID_Articulo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdRegistro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `IdCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `datoscom`
--
ALTER TABLE `datoscom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID_Articulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `ID_Articulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IdRegistro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
