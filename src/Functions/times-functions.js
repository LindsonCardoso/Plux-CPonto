

export const getTodayInfo = () => {
    let now = new Date();

    const dayName = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ];
    const monName = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    return (
        dayName[now.getDay()] +
        "," +
        now.getDate() +
        " de " +
        monName[now.getMonth()] +
        " de " +
        now.getFullYear()
    );
};

export const getTodayDate = () => {
    let now = new Date();
    return `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${
        now.getMonth() + 1 < 10
            ? "0" + (now.getMonth() + 1)
            : now.getMonth() + 1
    }/${now.getFullYear()}`;
};

export const getHour = (date) => {
    let hour = date.getHours();
    let min = date.getMinutes();

    return `${hour}:${min}`;
};

export const getLogDate = (data) => {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let year = data.getFullYear();
    let month = months[data.getMonth()];
    let date = data.getDate();
    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let time =
        date +
        " de " +
        month +
        " " +
        year +
        " - " +
        hour +
        ":" +
        min +
        ":" +
        sec;

    return time;
};

export const getMonth = () => {
    const monName = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    return monName[new Date().getMonth()];
};

export const getTodayDateConsulta = () => {
    let now = new Date();
    return `${now.getFullYear()}-${
        now.getMonth() + 1 < 10
            ? "0" + (now.getMonth() + 1)
            : now.getMonth() + 1
    }-${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`;
};

export const saveFromDate = (date) => {
    let now = new Date(date);
    return `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${
        now.getMonth() + 1 < 10
            ? "0" + (now.getMonth() + 1)
            : now.getMonth() + 1
    }/${now.getFullYear()}`;
};
