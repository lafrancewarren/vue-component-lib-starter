<template>
  <v-btn
    depressed
    :aria-label="ariaLabel"
    :disabled="disabled || loading"
    :loading="loading"
    :absolute="absolute"
    :bottom="bottom"
    :right="right"
    :small="size === 'small'"
    :x-small="size === 'x-small'"
    :text="priority === 'secondary' || type == 'reset'"
    :icon="
      (iconOnly && priority === 'secondary') || (iconOnly && type == 'reset')
    "
    :fab="iconOnlyCalc"
    :color="type === 'reset' ? 'secondary' : color"
    :href="link"
    :target="target"
    :type="type"
    :class="btnClass"
    @click="$emit('btnClick')"
  >
    <v-icon v-if="iconOnlyLocation === 'left'" left>{{ iconCalc }}</v-icon>
    <slot v-if="!iconOnlyCalc"></slot>
    <v-icon v-if="iconOnlyLocation === 'right'" right>{{ iconCalc }}</v-icon>
    <v-icon v-if="iconOnlyCalc">{{ iconCalc }}</v-icon>
  </v-btn>
</template>

<script lang="ts">

import Vue from "vue";
import { VBtn, VIcon } from "vuetify/lib";

import vuetify from '../plugins/vuetify';

Vue.use(vuetify)

export default Vue.extend({
  name: "JcdcBtn",
  components: {
    VBtn,
    VIcon
  },
  props: {
    size: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "primary"
    },
    priority: {
      type: String,
      default: "primary"
    },
    link: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    iconOnly: {
      type: Boolean
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconRight: {
      type: Boolean
    },
    align: {
      type: String,
      default: "left"
    },
    absolute: {
      type: Boolean
    },
    bottom: {
      type: Boolean
    },
    right: {
      type: Boolean
    }
  },
  computed: {
    // Icon Only/Location

    // Set icon by button type
    iconCalc():string {
      if (this.type === "reset") return "mdi-undo";
      else if (this.type === "submit") return "mdi-send";
      return this.icon;
    },
    // Icon only when slot is empty
    iconOnlyCalc() {
      if (this.iconOnly) return true;
      //else if (this.$slots.default) return false;
      return false;
    },
    // Show/hide icons based on icon settings
    iconOnlyLocation() {
      if (this.iconOnlyCalc) return "null";
      else if (
        (this.iconRight && this.iconCalc != "") ||
        this.type === "submit"
      )
        return "right";
      else if (this.iconCalc != "") return "left";
      return "null";
    },

    // CLASSES

    // Adjust spacing based on aligment
    alignClass() {
      if (this.align === "left") return "mr-1";
      else if (this.align === "right") return "ml-1";
      return "mx-h";
    },
    // Adjust text color based on background color
    textColorClass() {
      if (this.color === "warning") return "black--text";
      return "";
    },
    // Combine classes
    btnClass() {
      const btnClass: string = this.alignClass + " " + this.textColorClass;
      return btnClass;
    }
  },
  //render() {
  //  /*
  //   * The container node is expected to provide a single root,
  //   * so it's okay to return `VNode[]` as any.
  //   */
  //  return this.$scopedSlots.default!({}) as any;
  //}
});
</script>
<style scoped lang="scss">
// @import "@/assets/styles/variables.scss";
/* src/sass/variables.scss */
$border-radius-root: 0 !default;

/** Typography **/

$body-font-family: "Source Sans Pro", sans-serif !important;
$headings-font-family: "Source Sans Pro", sans-serif !important;

$font-weights: (
  "thin": 200,
  "light": 300,
  "regular": 400,
  "medium": 500,
  "bold": 600,
  "black": 800,
);

/** Headings **/

$headings: (
  "h1": (
    "size": 2.25rem,
  ),
  "h2": (
    "size": 1.5rem,
  ),
  "h3": (
    "size": 1.17rem,
  ),
  "h4": (
    "size": 1rem,
  ),
  "h5": (
    "size": 0.83rem,
  ),
  "h6": (
    "size": 0.67rem,
  ),
  ".headline": (
    "size": 0.83em,
  ),
);

@each $el, $props in $headings {
    #{$el} {
      font-size: map-get($props, 'size');
      color: var(--v-primary-base);
      font-weight: map-get($font-weights, "bold");
      line-height: 1.2rem;
    }
  }
  
/** Spacing **/

$spacer: 4px !default;
$grid-gutter: $spacer * 10;
$container-padding-x: $grid-gutter;

/** Border Radius **/

$list-border-radius: 0px;
$border-radius-root: 0px;

/** Buttons **/

$btn-font-sizes: (
  (
    "x-small": 0.775rem,
    "small": 0.875rem,
    "default": 1rem,
    "large": 1.25rem,
    "x-large": 1.25rem,
  )
);

$btn-font-weight: 400;
$btn-letter-spacing: 0.015rem;
$btn-text-transform: none;

//** Custon Spacing **/
.mx-h {
  margin-left: $spacer / 2;
  margin-right: $spacer / 2;
}

// Dense Label

$text-field-dense-padding: 4px 0 4px;

</style>