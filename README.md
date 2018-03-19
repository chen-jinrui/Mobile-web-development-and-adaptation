# Mobile-web-development-and-adaptation

## 移动web开发与适配特点
*   跑在手机端的web页面（H5页面）
*   跨平台
*   基于webview
*   告别IE,拥抱webkit
*   更高的适配和性能要求

## 常见移动web适配方法

### PC:
*   960px/1000px 居中
*   盒子模型, 定宽, 定高
*   Display: inline-block
### 移动web:
*   定高, 宽度百分比
*   flex
*   Media Query

## rem原理与简洁
*   rem是( font size of the root element )
*   字体单位--值根据html根元素大小而定, 同样可以作为宽度, 高度等单位。
*   适配原理--将px替换成rem, 动态修改html的font-size适配。
*   兼容性--Ios 6以上 和 andriod 2.1以上, 基本覆盖所有流行的手机系统
