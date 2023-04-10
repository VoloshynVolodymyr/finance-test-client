const timeConverter = (h, m, s) => {
    const time = Number(Number(h)*3600 + Number(m)*60 + Number(s));
    return time;
};

export default timeConverter;