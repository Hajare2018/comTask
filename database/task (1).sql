-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2023 at 01:26 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `imagedata`
--

CREATE TABLE `imagedata` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `quantity` int(2) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `imagedata`
--

INSERT INTO `imagedata` (`id`, `image`, `title`, `description`, `quantity`, `price`, `date`) VALUES
(1, 'uploads\\image_1674655490421.jpg', 'picture', 'my pic ', 2, '1200.00', '2022-10-22'),
(2, 'uploads\\image_1674655895323.jpg', 'Window', 'about window', 1, '2.00', '2024-12-22'),
(3, 'uploads\\image_1674661057351.jpg', 'wallpaper', 'no', 10, '1000.00', '2023-01-26'),
(4, 'uploads\\image_1674661150199.jpg', 'Purple', 'multer use', 1, '2000.00', '2022-02-20'),
(5, 'uploads\\image_1674661216417.jpg', 'Purple', 'multer use', 1, '2000.00', '2022-02-20'),
(6, 'uploads\\image_1674661303745.png', 'Lake', 'waterfall', 1, '1200.00', '2020-12-10'),
(7, 'uploads\\image_1674789006068.jpg', 'lily ', 'flower', 1, '70.00', '2022-10-22'),
(8, 'uploads\\image_1674789098177.jpg', 'Retina', 'display', 4, '10.00', '2023-12-10'),
(9, 'uploads\\image_1674789210899.jpg', 'miami', 'pic', 10, '2000.00', '2023-10-12'),
(10, 'uploads\\image_1674789301443.jpg', 'mac ', 'book', 1, '3000.00', '2023-01-01'),
(11, 'uploads\\image_1674789384638.jpg', 'solid', 'color ', 1, '10001.00', '2022-02-20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imagedata`
--
ALTER TABLE `imagedata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imagedata`
--
ALTER TABLE `imagedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
