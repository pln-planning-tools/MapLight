import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import minMax from 'dayjs/plugin/minMax';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(minMax);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export { dayjs };
