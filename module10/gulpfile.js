const { src, dest, task } = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const gulpCherio = require("gulp-cheerio");
const replace = require("gulp-replace");

console.log(src, dest)

const configuration = {
    mode: {
        symbol: true
    }
}
task("build", () =>
{
    return src("assets/svg/*.svg").pipe(gulpCherio({
        run: ($) =>
        {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        }, parserOptions: { xmlMode: true }
    })).pipe(replace('&gt;', '>')).pipe(
        svgSprite(configuration)
    ).pipe(dest('out'))
})


task("js_build", () =>
{
    return src("./js/*.js").pipe(dest("jsout"))
})















// const { src, dest, task } = require("gulp");
// const svgSprite = require("gulp-svg-sprite");

// const config = {
//     mode: {
//         symbol: true
//     }
// }


// task("sprites", () => src("./assets/svg/*.svg").pipe(
//     svgSprite(config)).pipe(dest("output"))
// )

// task("pers_task", () => src("./assets/pers/*svg").pipe(
//     svgSprite(
//         config
//     )).pipe(dest("pers_sprite"))
// )

