export default function getMonth(summary) {
  return summary.forEach(item => {
    switch (item.month) {
      case '1':
        item.month = 'January';
        break;
      case '2':
        item.month = 'February';
        break;
      case '3':
        item.month = 'March';
        break;
      case '4':
        item.month = 'April';
        break;
      case '5':
        item.month = 'May';
        break;
      case '6':
        item.month = 'June';
        break;
      case '7':
        item.month = 'July';
        break;
      case '8':
        item.month = 'August';
        break;
      case '9':
        item.month = 'September';
        break;
      case '10':
        item.month = 'October';
        break;
      case '11':
        item.month = 'November';
        break;
      case '12':
        item.month = 'December';
        break;

      default:
        break;
    }
  });
}
