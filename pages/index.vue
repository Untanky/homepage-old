<template>
  <div class="home">
    <introduction />
    <website-content
      heading="Protfolio"
    >
      Got an open position? Want to hire a new face? Interested in Lukas? <br>
      You can check if he matches your requirements for an open position by reading
      through his portfolio. You can check his skills and previous employments there.

      <template
        slot="footer"
      >
        <a
          class="action"
          href="#"
        >
          <span class="material-icons">
            cloud_download
          </span>
          Download
        </a>
      </template>
    </website-content>
  </div>
</template>

<script>
import Introduction from '../components/Introduction.vue';
import WebsiteContent from '../components/WebsiteContent.vue';

export default {
  components: {
    Introduction,
    WebsiteContent,
  },
};
</script>
