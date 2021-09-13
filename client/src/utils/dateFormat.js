const addDateSuffix = (date) => {
	let dateStr = date.toString();

	// get last char of date string
	const lastChar = dateStr.charAt(dateStr.length - 1);

	if (lastChar === '1' && dateStr !== '11') {
		dateStr = `${dateStr}st`;
	} else if (lastChar === '2' && dateStr !== '12') {
		dateStr = `${dateStr}nd`;
	} else if (lastChar === '3' && dateStr !== '13') {
		dateStr = `${dateStr}rd`;
	} else {
		dateStr = `${dateStr}th`;
	}

	return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as parameters
// module.exports = (
export function dateFormat(date) {
	// create month object
	const months = {
		0: 'Jan',
		1: 'Feb',
		2: 'Mar',
		3: 'Apr',
		4: 'May',
		5: 'Jun',
		6: 'Jul',
		7: 'Aug',
		8: 'Sep',
		9: 'Oct',
		10: 'Nov',
		11: 'Dec',
	};

	const dateObj = new Date(date);
	const formattedMonth = months[dateObj.getMonth()];

	const dayOfMonth = addDateSuffix(dateObj.getDate());

	const year = dateObj.getFullYear();
	let hour =
		dateObj.getHours() > 12
			? Math.floor(dateObj.getHours() / 2)
			: dateObj.getHours();

	// if hour is 0 (12:00am), change it to 12
	if (hour === 0) {
		hour = 12;
	}

	const minutes = dateObj.getMinutes();

	// set `am` or `pm`
	const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

	const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year}`;
	// at ${hour}:${minutes} ${periodOfDay}
	return formattedTimeStamp;
}
