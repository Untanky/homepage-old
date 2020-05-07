<template>
  <div class="home">
    <introduction />
    <website-content
      heading="Portfolio"
      link-path="/portfolio"
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
    <website-content
      heading="Projects"
      link-path="/projects"
    >
      Want to see what Lukas has already created? <br>
      Go checkout his projects page, where you can see his most recent projects and
      previously complete projects. For some there might even be a live-demo.
    </website-content>
    <website-content
      heading="Social Media"
      link-path="/social"
    >
      On his social media, Lukas posts about his life. He shares progress on his projects,
      recipes he cooked and adventures he survived. Interested in getting to know him
      a bit more? <br>
      So, go on and follow him on my social media platforms.
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
  data: () => ({}),
  head: () => ({
    title: 'Lukas Grimm - Homepage',
  }),
};
</script>
