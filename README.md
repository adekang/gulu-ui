# gulu-ui
# 运行步骤

运行 yarn

运行 yarn dev

打开 http://127.0.0.1:3000

# 官网打包步骤

运行 yarn

运行 yarn build

得到的 dist 目录就是官网源代码

编辑并运行 sh deploy.sh 就可以上传到 Github 或码云等支持 Pages 功能的平台

# 库文件打包步骤

运行 rollup -c

得到的 dist/lib 目录就是编译后的库文件所在目录
