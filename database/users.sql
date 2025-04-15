-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2025 at 07:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `role`) VALUES
(5, 'ds', 'asnj', 'abhay@gmial.com', '$2b$10$e8Yh5W8iEtPvXyaDGHX/8eN4oGga1EUtmheYpfinaQ7WZn0IL7Yh.', 'user'),
(6, 'test', 'test', 'test@gmail.com', '$2b$10$svj.bdfe4s.iAuoN9LBgdeCdgffRtM8ltjo3ld.wBicVOQpZzAxPC', 'user'),
(7, 'akshay', 'patel', 'akshay@gmail.com', '$2b$10$4OT8gdXdMe8JRL.q3EYy2en1V11uwzfJRLwF55X4xdMUX9N.wd3h6', 'user'),
(8, 'jay', 'patel', 'jay@gmail.com', '$2b$10$uevF20jey55G4n9T0sOZ3eDSr6zAsopLrmmggowH3LO9CICxtjR2W', 'user'),
(9, 'jaydip', 'patel', 'jaydip@gmail.com', '$2b$10$rU5iUDjeI0lYI7jf96tcQuALDCsA2Sd/qsp8eIvIvGTkCsy96PQcK', 'user'),
(10, 'jenish', 'patel', 'jenish@gmail.com', '$2b$10$UaHq3C57B7xJb2kdH0R33OsnjVOVhRvMpTFHxT/PCGiYnNiWr0lLu', 'user'),
(11, 'keval', 'pa', 'keval@gmail.com', '$2b$10$EbgwvZFzQTtdXBJF6y3nPOS8/dvTXw5MNZZDjJNqRHAyaIQU9wv6y', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
