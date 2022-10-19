<script>
  import { h } from 'vue'

  export default ({
    name: 'VComponent',
    props: { onRender: { default: () => {}, type: Function } },
    render() {
      return this.onRender(h);
    }
  });
</script>
