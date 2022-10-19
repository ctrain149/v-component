<script>
  export default ({
    name: 'VComponent',
    props: { onRender: { default: () => {}, type: Function } },
    render(h) {
      return this.onRender(h);
    }
  });
</script>
