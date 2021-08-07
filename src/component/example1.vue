<template>
  <div><span>檔案：</span><input @change="getfile" type="file" accept="image/*" /></div>
</template>
<script>
import Tesseract from "tesseract.js";
export default {
  methods: {
    getfile(file) {
      var img = file.target.files[0];
      Tesseract.recognize(img, "chi_tra", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        alert(text);
      });
    },
  },
};
</script>
