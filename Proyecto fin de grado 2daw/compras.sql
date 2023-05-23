-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2023 a las 22:30:14
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
  `IdPedido` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
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

INSERT INTO `clientes` (`IdPedido`, `IdUsuario`, `Nombre`, `Apellidos`, `Email`, `carrito`, `Direccion`, `Codigo_postal`) VALUES
(1, 1, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(2, 1, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(3, 1, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050),
(4, 1, 'pepe', 'gimenez', 'perico@gmail.com', '[{\"id\":1,\"precio\":\"50\",\"titulo\":\"Jedi Fallen Order\",\"cantidad\":1,\"estado\":\"activo\"},{\"id\":2,\"precio\":\"35\",\"titulo\":\"Scuadrons\",\"cantidad\":1,\"estado\":\"activo\"}]', 'calle del pino ', 28050);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `Id` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  `IdProductoRe` int(11) NOT NULL,
  `Reseña` varchar(260) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datoscom`
--

CREATE TABLE `datoscom` (
  `ID` int(11) NOT NULL,
  `titular` varchar(16) NOT NULL,
  `ntar` varchar(118) NOT NULL,
  `cod` varchar(118) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datoscom`
--

INSERT INTO `datoscom` (`ID`, `titular`, `ntar`, `cod`) VALUES
(1, 'ppe', '$2y$10$2CCFkVQe/pmmGvk96D8Bf.NS9a6SqjdZ.XAH4QAZ3HpevebMH4CZ2', '$2y$10$.rHIDnNfbI3gwa2Hxwo/je6Vh0kDyVLraOoghkWXHk8rAP7T2XKZG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gerencia`
--

CREATE TABLE `gerencia` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(14) NOT NULL,
  `usuario` varchar(14) NOT NULL,
  `contrasena` varchar(118) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gerencia`
--

INSERT INTO `gerencia` (`ID`, `Nombre`, `usuario`, `contrasena`) VALUES
(1, 'guillermo', 'admin', '$2y$10$dbSD3HOHWKe7GWSvytRw3eBRRiE1EDp8IFlW9NylDH5FqIyUbJ/SG'),
(2, 'miguel', 'miguel58', '$2y$10$34rzExyrUYY1r2lj2TcQvOJnbQI36d7Qe2d51/.uTHFpJhKEVCkuO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `Id` int(11) NOT NULL,
  `Titulo` varchar(60) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`Id`, `Titulo`, `Precio`, `Cantidad`) VALUES
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
  `Id` int(11) NOT NULL,
  `Titulo` varchar(60) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Fecha_Salida` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`Id`, `Titulo`, `Precio`, `Fecha_Salida`) VALUES
(1, 'Starfield', '50.00', '06/09/2023'),
(2, 'Jedi survival', '60.00', '02/06/2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasclientes`
--

CREATE TABLE `reservasclientes` (
  `Id` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `Usuario` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `Articulo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `Nombre` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `Contrasena` varchar(118) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `Fecha_Alta` varchar(11) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Usuario`, `Nombre`, `Contrasena`, `Email`, `Fecha_Alta`) VALUES
(1, '', 'pepe', '$2y$10$SUtQDYMgI/D4CIBHHvQ/neTF/NZTsg82VbLZgmeIjRUWWQ5lCjPWa', 'perico@gmail.com', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`IdPedido`),
  ADD KEY `pkUsuario` (`IdUsuario`) USING BTREE;

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FKUsuario` (`IdUsuario`) USING BTREE,
  ADD KEY `IdProducto` (`IdProducto`),
  ADD KEY `IdProductoRe` (`IdProductoRe`);

--
-- Indices de la tabla `datoscom`
--
ALTER TABLE `datoscom`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `reservasclientes`
--
ALTER TABLE `reservasclientes`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `PKUsuario` (`IdUsuario`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `IdPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datoscom`
--
ALTER TABLE `datoscom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reservasclientes`
--
ALTER TABLE `reservasclientes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`IdProductoRe`) REFERENCES `reservas` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_3` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservasclientes`
--
ALTER TABLE `reservasclientes`
  ADD CONSTRAINT `reservasclientes_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
