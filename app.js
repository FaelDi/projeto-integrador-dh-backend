var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var app = express();

app.use(cors())

var indexRouter = require('./routes');
var usuariosRoutes = require('./routes/usuarios');
var empresasRouter = require("./routes/empresas");
var atividadesRouter = require("./routes/atividades");
var vendasRouter = require('./routes/vendas');
var produtosRouter = require("./routes/produtos");
var pagamentoRouter = require('./routes/pagamentos');
var cotacoesRouter = require("./routes/cotacoes");
var entregasRouter = require("./routes/entregas");
var cotacoesProdutosRouter = require('./routes/cotacoesProdutos');
var avaliacoesRouter = require('./routes/avaliacoes');

var logMiddleware = require('./middlewares/logSite')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logMiddleware);

app.use('/', indexRouter);
// app.use('/#', indexRouter);
app.use('/usuarios', usuariosRoutes);
app.use('/empresas', empresasRouter);
app.use('/atividades', atividadesRouter);
app.use('/vendas', vendasRouter);
app.use('/produtos', produtosRouter);
app.use('/pagamentos', pagamentoRouter);
app.use('/cotacoes', cotacoesRouter);
app.use('/entregas', entregasRouter);
app.use('/cotacoesProdutos', cotacoesProdutosRouter);
app.use('/avaliacoes', avaliacoesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//The 404 Route (ALWAYS Keep this as the last route)
app.get('/404', function(req, res){
  res.send('what???', 404);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

module.exports = app;
