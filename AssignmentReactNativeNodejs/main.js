var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "quanli",
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

app.get('/laysp', function (req, res) {
	var sql = "SELECT * FROM `san` ORDER BY MaSP desc";
	con.query(sql, function (error, result) {
		if (error) throw error;
		res.json(result);
	});

});

app.get('/laydanhmuc', function (req, res) {
	var sql = "SELECT * FROM `danhmuc` ORDER BY MaDanhMuc desc";
	con.query(sql, function (error, result) {
		if (error) throw error;
		res.json(result);
	});

});

app.get('/search/:TenSP', function (req, res) {
	var TenSP = req.params.TenSP;
	var sql = "SELECT * FROM `san` where TenSP like '%" + TenSP + "%'";
	con.query(sql, function (error, result) {
		if (error) throw error;
		res.json(result);
	});

});

app.get('/laygiohang', function (req, res) {
	var sql = "SELECT * FROM `giohang` ORDER BY MaGioHang desc";
	con.query(sql, function (error, result) {
		if (error) throw error;
		res.json(result);
	});

});

app.post("/addgiohang", function (req, res) {
	var ImgGioHang = req.body.ImgGioHang;
	var TenGioHang = req.body.TenGioHang;
	var GiaGioHang = req.body.GiaGioHang;
	var SoLuongGioHang = req.body.SoLuongGioHang;
	//console.log(req.body);
	con.connect(function (err) {
		var sql = "INSERT INTO `giohang`(`ImgGioHang`, `TenGioHang`, `GiaGioHang`, `SoLuongGioHang`) VALUES ('" + ImgGioHang + "','" + TenGioHang + "','" + GiaGioHang + "','" + SoLuongGioHang + "')";
		//console.log("abc");
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.send("successed");
		});

	});
});

app.post("/suagiohang", function (req, res) {
	var MaGioHang = req.body.MaGioHang;
	var ImgGioHang = req.body.ImgGioHang;
	var TenGioHang = req.body.TenGioHang;
	var GiaGioHang = req.body.GiaGioHang;
	var SoLuongGioHang = req.body.SoLuongGioHang;
	//console.log(req.body);
	con.connect(function (err) {
		var sql = "UPDATE `giohang` SET `ImgGioHang`='" + ImgGioHang + "',`TenGioHang`='" + TenGioHang + "',`GiaGioHang`='" + GiaGioHang + "',`SoLuongGioHang`='" + SoLuongGioHang + "' WHERE `MaGioHang`='" + MaGioHang + "'";
		//console.log("abc");
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.send("successed");
		});

	});
});

app.post("/deleteGiohang", function (req, res) {
	console.log(req);
	var MaGioHang = req.body.MaGioHang;
	con.connect(function (err) {

		var sql = "DELETE FROM `giohang` WHERE MaGioHang='" + MaGioHang + "'";

		con.query(sql, function (err, result) {

			if (err) throw err;

			res.send("successed");

		});

	});

});

app.post("/adduser", function (req, res) {
	var TenUser = req.body.TenUser;
	var PassUser = req.body.PassUser;
	var Email = req.body.Email;
	//console.log(req.body);
	con.connect(function (err) {
		var sql = "INSERT INTO `user`(`TenUser`, `PassUser`, `Email`) VALUES ('" + TenUser + "','" + PassUser + "','" + Email + "')";
		//console.log("abc");
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.send("successed");
		});

	});
});

app.get('/dangnhap/:TenUser/:PassUser', function (req, res) {
	var TenUser = req.params.TenUser;
	var PassUser = req.params.PassUser;
	var sql = "SELECT * FROM `user` where TenUser= '" + TenUser + "' and PassUser= '" + PassUser + "'";
	con.query(sql, function (error, result) {
		if (error) throw error;
		res.json(result);
	});

});

app.listen(80, "192.168.130.242");