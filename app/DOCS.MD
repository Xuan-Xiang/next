# next 学习笔记


## 路由


### 组件、目录

#### layout && template

`layout` 可以保留状态，`template` 不行，两者同时存在时 `layout`在`template`之上

#### 可自定义组件

1. `loading.tsx` 组件，通过`suspense`实现，组件含有异步状态时，显示`loading`组件

2. `error.tsx` 组件，通过`Error Boundary` 实现的。组件发生错误时显示该组件，必须为客户端组件

3. `not-found.tsx` 未匹配路由的组件到路由的组件，整个项目只需要一个。自定义后会覆盖默认的，该组件放在app下

#### 路由导航跳转

1. <Link>是一个内置组件，在a标签的基础上扩展了功能，并且还能用来实现预获取(prefetch)，prefetch只在生产模式下生效，默认为true，以及保持滚动位置(scroll)等。
[官方资料](https://nextjs.org/docs/pages/api-reference/components/link)

2. `useRouter` 可以在代码中根据逻辑跳转页面，例如根据用户权限跳转不同的页面。（**必须在客户端组件中,link组件却不需要**）

3. `redirect` 、`permanentRedirect`重定向，区别是 `permanentRedirect`为永久重定向

#### 动态路由

1. 使用`[xx]`为动态路由，`[...xx]` 为多个参数，`[[xx]]` 为可选参数

2. 两种获取参数方式，分为客户端啊组件与服务端组件
    * 客户端组件：useParams，必须声明客户端组件
    * 服务端组件：通过声明为异步函数的方式，通过函数入参拿到

#### 平行路由

平行路由指的是在同一布局 `layout.tsx`中 可以渲染多个页面

1. 使用`@xx `进行文件目录的声明，@符号并不会影响URL路径。在`layout.tsx`文件中传入对应的参数接受

#### 路由组

路由组也是一种基于文件夹的约定范式，可以让我们开发者，按类别或者团队组织路由模块，并且不影响 URL 路径。

1. 用法：使用 `(xx)` 包裹文件名，一般属于大型项目，需要将业务分开，比如后台管理 以及前台门户页面区分

2. 注意，使用时文件名不应该与其他文件名一样，档最终映射的URL一致时会报错


#### 接口定义

接口定义路径与页面路径一致，默认读取`route.ts`中方法，与`page.tsx` 用法一致，但同一目录下，不能同时存在`route.ts` 与 `page.tsx`。不然 `next` 不知道用哪一个了

1. `Next.js`是遵循`RESTful API`的规范，所以我们可以使用HTTP请求类型来定义请求

2. 我们在定义这些请求方法的时候不能修改方法名称而且必须是大写，否则无效。

3. `NextRequest` 与 `NextResponse` 本质上是对 `web Request Api` 的再次封装，跟 `fetch` 上的用法一致，只是做了更多的扩展。
    [fetchAPi具体用法](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

4. 动态参数跟路由一致，可以通过 `[[...id]]` 的形式来使用，接受参数通过方法的第二个参数接受，跟异步服务端组件一致



### 注意事项

1. 客户端组件无法使用 async 异步方法