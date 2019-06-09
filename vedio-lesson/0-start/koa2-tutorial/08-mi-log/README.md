
## log 日志中间件

### log4js 官方简单示例

```javascript
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'
logger.debug("Some debug messages")
```


```
[2019-06-09T10:36:19.055] [DEBUG] default - Some debug messages
```

### log4js 官方复杂示例

```javascript
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
```
运行之后，在当前的目录下会生成一个日志文件 cheese.log文件，文件中有两条日志并记录了 error 及以上级别的信息，也就是如下内容：
```javascript
[2019-06-09T10:43:00.674] [ERROR] cheese - Cheese is too ripe!
[2019-06-09T10:43:00.676] [FATAL] cheese - Cheese was breeding ground for listeria.
```