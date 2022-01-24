function slugger (strings) {
    return strings.replaceAll(' ','-')
};

module.exports = slugger;