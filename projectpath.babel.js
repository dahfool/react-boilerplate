import path from 'path';

/* Environment Path */
const PATH = {
    public: path.resolve(__dirname, 'public/'),
    src: path.resolve(__dirname, 'src/'),
    sass () { return this.src + "/scss/" },
    js () { return this.src + "/js/" },
    BuildJs () { return this.public + "/js/" },
    buildCss () { return this.public + "/css/" }
};

export default PATH;
