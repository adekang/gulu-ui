# 开始使用
请先[安装](#/doc/install)本组件库。

你可以忽略下面的话，因为只是装修一个完整的UI库设计的，并不能安装！

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "gulu-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
<div>
<Button>按钮</Button>
</div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "gulu-ui"
export default {
components: {Button}
}
</script>
```