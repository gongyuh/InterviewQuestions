const xhr = new XMLHttpRequest();
xhr.open('GET', 'xxx', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  } else if (xhr.status === 404) {
    console.log('404 not found');
  }
};
xhr.send(null);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'xxx', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else if (xhr.status === 404) {
      console.log('404 is not found');
    }
  }
};

const p = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'xxx', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) {
        console.log('404 is not found');
      }
    }
  };
});
return p;
