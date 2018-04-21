import { Fragment, PureComponent, createElement } from "react";

function Container(props) {
  return createElement("div", { className: "container" }, props.children);
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function(module) {
  /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  /* global define */

  (function() {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          classes.push(classNames.apply(null, arg));
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(" ");
    }

    if ("object" !== "undefined" && module.exports) {
      module.exports = classNames;
    } else if (
      typeof undefined === "function" &&
      typeof undefined.amd === "object" &&
      undefined.amd
    ) {
      // register as 'classnames', consistent with npm package name
      undefined("classnames", [], function() {
        return classNames;
      });
    } else {
      window.classNames = classNames;
    }
  })();
});

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
};

var objectWithoutProperties = function(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
};

function GridRow(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$cards = _ref.cards,
    cards = _ref$cards === undefined ? false : _ref$cards,
    _ref$gutters = _ref.gutters,
    gutters = _ref$gutters === undefined ? "" : _ref$gutters;

  var classes = classnames(
    "row",
    defineProperty(
      {
        row: true,
        "row-cards": cards,
      },
      "gutters-" + gutters,
      gutters
    ),
    className
  );
  return createElement("div", { className: classes }, children);
}

function GridCol(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    _ref$width = _ref.width,
    width = _ref$width === undefined ? 0 : _ref$width,
    _ref$sm = _ref.sm,
    sm = _ref$sm === undefined ? 0 : _ref$sm,
    _ref$md = _ref.md,
    md = _ref$md === undefined ? 0 : _ref$md,
    _ref$lg = _ref.lg,
    lg = _ref$lg === undefined ? 0 : _ref$lg,
    auto = _ref.auto;

  var classes = classnames(
    ((_cn = {
      col: true,
    }),
    defineProperty(_cn, "col-" + width, width),
    defineProperty(_cn, "col-sm-" + sm, sm),
    defineProperty(_cn, "col-md-" + md, md),
    defineProperty(_cn, "col-lg-" + lg, lg),
    defineProperty(_cn, "col-auto", auto),
    _cn),
    className
  );
  return createElement("div", { className: classes }, children);
}

var Grid = {
  Row: GridRow,
  Col: GridCol,
};

function H1(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return createElement(
    Header,
    { RootComponent: "h1", className: classes, size: 1 },
    children
  );
}

function H2(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return createElement(
    Header,
    { RootComponent: "h2", className: classes, size: 2 },
    children
  );
}

function H3(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return createElement(
    Header,
    { RootComponent: "h3", className: classes, size: 3 },
    children
  );
}

function H4(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return createElement(
    Header,
    { RootComponent: "h4", className: classes, size: 4 },
    children
  );
}

function H5(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return createElement(
    Header,
    { RootComponent: "h5", className: classes, size: 5 },
    children
  );
}

function Header(_ref) {
  var RootComponent = _ref.RootComponent,
    className = _ref.className,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? 1 : _ref$size;

  var classes = classnames("h" + size, className);
  var Component = RootComponent || "div";
  return createElement(Component, { className: classes }, children);
}

Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;

var SiteHeader = function SiteHeader(_ref) {
  var children = _ref.children;
  return createElement(
    "div",
    { className: "header" },
    createElement(Container, null, children)
  );
};

var SiteNav = function SiteNav(props) {
  return createElement(
    "div",
    { className: "header-nav d-none d-lg-flex" },
    createElement(Container, null, props.children)
  );
};

var SiteLogo = function SiteLogo(props) {
  return createElement(
    "a",
    { className: "navbar-brand", href: props.href },
    createElement("img", {
      src: props.src,
      className: "navbar-brand-img",
      alt: props.alt,
    })
  );
};

var Site = { Header: SiteHeader, Navbar: SiteNav, Logo: SiteLogo };

function CardHeader(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("card-header", className);
  return createElement("div", { className: classes }, children);
}

function CardTitle(_ref) {
  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent;

  var classes = classnames("card-title", className);
  var Component = RootComponent || "h3";
  return createElement(Component, { className: classes }, children);
}

function CardBody(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("card-body", className);
  return createElement("div", { className: classes }, children);
}

function Card(_ref) {
  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    title = _ref.title,
    body = _ref.body;

  var classes = classnames("card", className);
  var Component = RootComponent || "div";
  var card_header =
    title &&
    createElement(CardHeader, null, createElement(CardTitle, null, title));

  var card_body = body && createElement(CardBody, null, body);

  if (card_header !== null || card_body !== null) {
    return createElement(
      Component,
      { className: classes },
      card_header,
      card_body || children
    );
  } else {
    return createElement(Component, { className: classes }, children);
  }
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;

function PageMain(_ref) {
  var children = _ref.children;

  return createElement("div", { className: "page-main" }, children);
}

function PageContent(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("page-content", className);
  return createElement(
    "div",
    { className: classes },
    createElement(Container, null, children)
  );
}

function PageHeader(_ref) {
  var children = _ref.children;

  return createElement(
    "div",
    { className: "page-header" },
    createElement("h1", { className: "page-title" }, children)
  );
}

function PageContentWithSidebar(_ref) {
  var children = _ref.children,
    header = _ref.header,
    sidebar = _ref.sidebar;

  return createElement(
    Page.Content,
    null,
    header,
    createElement(
      Grid.Row,
      null,
      createElement(Grid.Col, { lg: 3, className: "order-lg-1 mb-4" }, sidebar),
      createElement(Grid.Col, { lg: 9 }, children)
    )
  );
}

function PageCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    header = _ref.header,
    footer = _ref.footer,
    RootComponent = _ref.RootComponent;

  return createElement(
    "div",
    { className: "my-3 my-md-5" },
    createElement(
      Container,
      null,
      createElement(
        Grid.Row,
        null,
        createElement(
          Grid.Col,
          { width: 12 },
          createElement(
            Card,
            { RootComponent: RootComponent },
            title &&
              createElement(
                Card.Header,
                null,
                createElement(Card.Title, null, title)
              ),
            header,
            createElement(Card.Body, null, children),
            footer
          )
        )
      )
    )
  );
}

function Page(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("page", className);
  return createElement("div", { className: classes }, children);
}

Page.Main = PageMain;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.ContentWithSidebar = PageContentWithSidebar;
Page.Card = PageCard;

function FormLabel(_ref) {
  var className = _ref.className,
    aside = _ref.aside,
    children = _ref.children;

  var classes = classnames("form-label", className);
  return createElement(
    "label",
    { className: classes },
    aside && createElement("span", { className: "form-label-small" }, aside),
    children
  );
}

function FormGroup(_ref) {
  var className = _ref.className,
    children = _ref.children,
    label = _ref.label;

  var classes = classnames("form-group", className);
  return createElement(
    "div",
    { className: classes },
    !label
      ? null
      : typeof label === "string"
        ? createElement(FormLabel, null, label)
        : label,
    children
  );
}

function FormInput(props) {
  var className = props.className,
    icon = props.icon,
    _props$position = props.position,
    position = _props$position === undefined ? "prepend" : _props$position,
    valid = props.valid,
    tick = props.tick,
    invalid = props.invalid,
    cross = props.cross,
    feedback = props.feedback,
    placeholder = props.placeholder,
    value = props.value,
    onChange = props.onChange,
    disabled = props.disabled,
    readOnly = props.readOnly;

  var type = props.type || "text";

  var classes = classnames(
    "form-control",
    {
      "custom-control-input": type === "checkbox",
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross,
    },
    className
  );
  return !icon
    ? createElement(
        Fragment,
        null,
        type === "checkbox"
          ? createElement("input", {
              className: classes,
              type: type,
              placeholder: placeholder,
              checked: value,
              value: value,
              disabled: disabled,
              readOnly: readOnly,
              onChange: onChange,
            })
          : createElement("input", {
              className: classes,
              type: type,
              placeholder: placeholder,
              value: value,
              disabled: disabled,
              readOnly: readOnly,
              onChange: onChange,
            }),
        feedback &&
          (invalid || cross) &&
          createElement("span", { className: "invalid-feedback" }, feedback)
      )
    : createElement(
        "div",
        { className: "input-icon" },
        position === "prepend" &&
          createElement(
            "span",
            { className: "input-icon-addon" },
            createElement(Icon, { name: icon })
          ),
        createElement("input", { className: classes }),
        position === "append" &&
          createElement(
            "span",
            { className: "input-icon-addon" },
            createElement(Icon, { name: icon })
          )
      );
}

function FormStaticText(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("form-control-plaintext", className);
  return createElement("div", { className: classes }, children);
}

function FormTextarea(_ref) {
  var className = _ref.className,
    name = _ref.name,
    placeholder = _ref.placeholder,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    disabled = _ref.disabled,
    rows = _ref.rows;

  var classes = classnames("form-control", className);
  return createElement("textarea", {
    className: classes,
    name: name,
    placeholder: placeholder,
    defaultValue: defaultValue,
    value: value,
    disabled: disabled,
    rows: rows,
  });
}

function FormImageCheck(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("gutters-sm", className);
  return createElement(Grid.Row, { className: classes }, children);
}

function FormImageCheckItem(_ref) {
  var className = _ref.className,
    _ref$col = _ref.col;
  _ref$col = _ref$col === undefined ? {} : _ref$col;
  var _ref$col$width = _ref$col.width,
    width = _ref$col$width === undefined ? 6 : _ref$col$width,
    _ref$col$sm = _ref$col.sm,
    sm = _ref$col$sm === undefined ? 4 : _ref$col$sm,
    _ref$col$md = _ref$col.md,
    md = _ref$col$md === undefined ? 0 : _ref$col$md,
    _ref$col$lg = _ref$col.lg,
    lg = _ref$col$lg === undefined ? 0 : _ref$col$lg,
    imageURL = _ref.imageURL,
    value = _ref.value;

  return createElement(
    Grid.Col,
    { width: width, sm: sm, md: md, lg: lg },
    createElement(
      "label",
      { className: "imagecheck mb-4" },
      createElement("input", {
        name: "imagecheck",
        type: "checkbox",
        value: value,
        className: "imagecheck-input",
      }),
      createElement(
        "figure",
        { className: "imagecheck-figure" },
        createElement("img", {
          src: imageURL,
          alt: "Select",
          className: "imagecheck-image",
        })
      )
    )
  );
}

function FormColorCheck(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames("gutters-xs", className);
  return createElement(Grid.Row, { className: classes }, children);
}

function FormColorCheckItem(_ref) {
  var className = _ref.className,
    color = _ref.color;

  var classes = classnames(className);
  return createElement(
    Grid.Col,
    { auto: true, className: classes },
    createElement(
      "label",
      { className: "colorinput" },
      createElement("input", {
        name: "color",
        type: "checkbox",
        value: color,
        className: "colorinput-input",
      }),
      createElement("span", { className: "colorinput-color bg-" + color })
    )
  );
}

function FormInputGroup(_ref) {
  var className = _ref.className,
    children = _ref.children,
    append = _ref.append,
    RootComponent = _ref.RootComponent;

  var classes = classnames(
    { "input-group": !append, "input-group-append": append },
    className
  );
  var Component = RootComponent || "div";
  return createElement(Component, { className: classes }, children);
}

function FormHelp(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === undefined ? "top" : _ref$position,
    message = _ref.message;

  var classes = classnames("form-help", className);
  return createElement(
    "span",
    {
      className: classes,
      dataContent: message,
      dataToggle: "popover",
      dataPlacement: position,
    },
    children || "?"
  );
}

function FormSelect(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames(
    { "form-control": true, "custom-select": true },
    className
  );
  return createElement("select", { className: classes }, children);
}

function FormFooter(props) {
  var classes = classnames("form-footer", props.className);
  return createElement("div", { className: classes }, props.children);
}

function Form(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames(className);
  return createElement("form", { className: classes }, children);
}

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.StaticText = FormStaticText;
Form.Textarea = FormTextarea;
Form.ImageCheck = FormImageCheck;
Form.ImageCheckItem = FormImageCheckItem;
Form.ColorCheck = FormColorCheck;
Form.ColorCheckItem = FormColorCheckItem;
Form.InputGroup = FormInputGroup;
Form.Help = FormHelp;
Form.Select = FormSelect;
Form.Footer = FormFooter;

function NavItem(_ref) {
  var children = _ref.children,
    RootComponent = _ref.RootComponent,
    value = _ref.value,
    className = _ref.className,
    to = _ref.to,
    icon = _ref.icon;

  var Component = RootComponent || "li";
  return createElement(
    Component,
    { className: "nav-item", to: to, icon: icon },
    createElement(
      Fragment,
      null,
      createElement(Nav.Link, { className: className }, value),
      children
    )
  );
}

function Icon(_ref) {
  var _cn;

  var _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === undefined ? "fe" : _ref$prefix,
    name = _ref.name,
    className = _ref.className,
    link = _ref.link,
    isAriaHidden = _ref.isAriaHidden;

  var classes = classnames(
    ((_cn = {}),
    defineProperty(_cn, prefix, true),
    defineProperty(_cn, prefix + "-" + name, true),
    _cn),
    className
  );
  var extraProps = isAriaHidden
    ? {
        "aria-hidden": "true",
      }
    : null;

  return !link
    ? createElement("i", { className: classes })
    : createElement(
        "a",
        _extends({ className: "icon" }, extraProps),
        createElement("i", { className: classes })
      );
}

function NavLink(_ref) {
  var children = _ref.children,
    className = _ref.className,
    RootComponent = _ref.RootComponent,
    icon = _ref.icon,
    _ref$active = _ref.active,
    active = _ref$active === undefined ? false : _ref$active;

  var classes = classnames({ "nav-link": true, active: active }, className);
  var Component = RootComponent || "a";
  return createElement(
    Component,
    { className: classes },
    icon &&
      createElement(Fragment, null, createElement(Icon, { name: icon }), " "),
    children
  );
}

function NavSubmenu(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames({ nav: true, "nav-submenu": true }, className);
  return createElement("div", { className: classes }, children);
}

function NavSubmenuItem(_ref) {
  var className = _ref.className,
    RootComponent = _ref.RootComponent,
    icon = _ref.icon,
    children = _ref.children,
    _ref$active = _ref.active,
    active = _ref$active === undefined ? false : _ref$active,
    to = _ref.to;

  var classes = classnames({ "nav-item": true, active: active }, className);
  var Component = RootComponent || "a";
  return createElement(
    Component,
    { className: classes, to: to },
    icon &&
      createElement(Fragment, null, createElement(Icon, { name: icon }), " "),
    children
  );
}

function Nav(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$tabbed = _ref.tabbed,
    tabbed = _ref$tabbed === undefined ? true : _ref$tabbed;

  var classes = classnames({ nav: true, "nav-tabs": tabbed }, className);
  return createElement("ul", { className: classes }, children);
}

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Submenu = NavSubmenu;
Nav.SubmenuItem = NavSubmenuItem;

function AlertLink(_ref) {
  var children = _ref.children,
    className = _ref.className;

  var classes = classnames("alert-link", className);
  return createElement("a", { className: classes }, children);
}

function Alert(_ref) {
  var className = _ref.className,
    children = _ref.children,
    type = _ref.type,
    icon = _ref.icon,
    hasExtraSpace = _ref.hasExtraSpace,
    isDismissible = _ref.isDismissible,
    avatar = _ref.avatar;

  var alertClassName = "alert-" + type;
  var classes = classnames(
    "alert",
    alertClassName,
    {
      "alert-icon": !!icon,
      "mt-5 mb-6": hasExtraSpace,
      "alert-dismissible": isDismissible,
      "alert-avatar": !!avatar,
    },
    className
  );
  return createElement(
    "div",
    { className: classes, role: "alert" },
    isDismissible &&
      createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "alert",
      }),
    avatar && createElement(Avatar, { image: avatar }),
    icon &&
      createElement(Icon, {
        name: icon,
        className: "mr-2",
        isAriaHidden: true,
      }),
    children
  );
}

Alert.Link = AlertLink;

function AvatarList(_ref) {
  var className = _ref.className,
    children = _ref.children,
    stacked = _ref.stacked;

  var classes = classnames(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked,
    },
    className
  );
  return createElement("div", { className: classes }, children);
}

function Avatar(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    image = _ref.image,
    style = _ref.style,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? "" : _ref$size,
    status = _ref.status,
    placeholder = _ref.placeholder,
    icon = _ref.icon,
    _ref$color = _ref.color,
    color = _ref$color === undefined ? "" : _ref$color;

  var classes = classnames(
    ((_cn = {
      avatar: true,
    }),
    defineProperty(_cn, "avatar-" + size, !!size),
    defineProperty(_cn, "avatar-placeholder", placeholder),
    defineProperty(_cn, "avatar-" + color, !!color),
    _cn),
    className
  );
  return createElement(
    "span",
    {
      className: classes,
      style: image
        ? Object.assign(
            {
              backgroundImage: "url(" + image + ")",
            },
            style
          )
        : style,
    },
    icon && createElement(Icon, { name: icon }),
    status &&
      createElement("span", { className: "avatar-status bg-" + status }),
    children
  );
}

Avatar.List = AvatarList;

function Badge(_ref) {
  var className = _ref.className,
    children = _ref.children;

  var classes = classnames(
    {
      badge: true,
      "badge-primary": true,
    },
    className
  );
  return createElement("span", { className: classes }, children);
}

// I cant pass in props for RootComponent so if I want to pass an icon down to a Button used as the Component I again have to
// specify it in these props, provide logic to determine whether or not to add the prop etc

function DropdownTrigger(_ref) {
  var className = _ref.className,
    toggle = _ref.toggle,
    value = _ref.value,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    icon = _ref.icon;

  var classes = classnames({ "dropdown-toggle": toggle }, className);
  var Component = RootComponent || Button;
  return createElement(
    Component,
    { className: classes, isDropdownToggle: true, icon: icon },
    value,
    children
  );
}

function DropdownMenu(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === undefined ? "" : _ref$position,
    arrow = _ref.arrow;

  var classes = classnames(
    ((_cn = {
      "dropdown-menu": true,
    }),
    defineProperty(_cn, "dropdown-menu-" + position, position),
    defineProperty(_cn, "dropdown-menu-arrow", arrow),
    _cn),
    className
  );
  return createElement("div", { className: classes }, children);
}

function DropdownItem(_ref) {
  var className = _ref.className,
    icon = _ref.icon,
    value = _ref.value,
    children = _ref.children,
    badge = _ref.badge;

  var classes = classnames({ "dropdown-item": true }, className);
  return createElement(
    "a",
    { className: classes },
    badge &&
      createElement(
        "span",
        { className: "float-right" },
        createElement(Badge, null, badge)
      ),
    icon &&
      createElement(
        Fragment,
        null,
        createElement(Icon, { name: icon, className: "dropdown-icon" }),
        " "
      ),
    value,
    children
  );
}

function DropdownItemDivider(props) {
  return createElement(
    "div",
    { className: "dropdown-divider" },
    props.children
  );
}

function Dropdown(_ref) {
  var className = _ref.className,
    children = _ref.children,
    desktopOnly = _ref.desktopOnly;

  var classes = classnames(
    { dropdown: true, "d-none": desktopOnly, "d-md-flex": desktopOnly },
    className
  );
  return createElement("div", { className: classes }, children);
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

function ButtonList(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$align = _ref.align,
    align = _ref$align === undefined ? "" : _ref$align,
    props = objectWithoutProperties(_ref, ["className", "children", "align"]);

  var classes = classnames(
    defineProperty({ "btn-list": true }, "text-" + align, !!align),
    className
  );
  return createElement(
    "div",
    _extends({ className: classes }, props),
    children
  );
}

var Button = function Button(_ref) {
  var _cn;

  var _ref$size = _ref.size,
    size = _ref$size === undefined ? "" : _ref$size,
    outline = _ref.outline,
    link = _ref.link,
    block = _ref.block,
    className = _ref.className,
    children = _ref.children,
    disabled = _ref.disabled,
    _ref$color = _ref.color,
    color = _ref$color === undefined ? "" : _ref$color,
    square = _ref.square,
    pill = _ref.pill,
    icon = _ref.icon,
    _ref$social = _ref.social,
    social = _ref$social === undefined ? "" : _ref$social,
    loading = _ref.loading,
    isDropdownToggle = _ref.isDropdownToggle,
    RootComponent = _ref.RootComponent,
    href = _ref.href,
    target = _ref.target,
    onClick = _ref.onClick;

  var onClickHandler =
    onClick ||
    function(event) {
      return true;
    };
  var classes = classnames(
    ((_cn = {
      btn: true,
    }),
    defineProperty(_cn, "btn-" + size, !!size),
    defineProperty(_cn, "btn-block", block),
    defineProperty(_cn, "btn-outline-" + color, outline && !!color),
    defineProperty(_cn, "btn-link", link),
    defineProperty(_cn, "disabled", disabled),
    defineProperty(_cn, "btn-" + color, !!color && !outline),
    defineProperty(_cn, "btn-" + social, !!social),
    defineProperty(_cn, "btn-square", square),
    defineProperty(_cn, "btn-pill", pill),
    defineProperty(_cn, "btn-icon", !children),
    defineProperty(_cn, "btn-loading", loading),
    defineProperty(_cn, "dropdown-toggle", isDropdownToggle),
    _cn),
    className
  );
  var Component = RootComponent || "button";
  var extraProps = {
    href: href,
    target: target,
    onClick: onClickHandler,
    "data-toggle": isDropdownToggle && "dropdown",
  };

  return Component === "input"
    ? createElement(
        Component,
        _extends({ className: classes, disabled: disabled }, extraProps),
        children
      )
    : createElement(
        Component,
        _extends({ className: classes, disabled: disabled }, extraProps),
        social
          ? createElement(Icon, {
              name: social,
              prefix: "fa",
              className: children ? "mr-2" : "",
            })
          : icon
            ? createElement(Icon, {
                name: icon,
                className: children ? "mr-2" : "",
              })
            : null,
        children
      );
};

Button.List = ButtonList;

var Text = function Text(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    _ref$color = _ref.color,
    color = _ref$color === undefined ? "" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? "" : _ref$size,
    wrap = _ref.wrap,
    props = objectWithoutProperties(_ref, [
      "className",
      "children",
      "RootComponent",
      "color",
      "size",
      "wrap",
    ]);

  var classes = classnames(
    ((_cn = {}),
    defineProperty(_cn, "text-wrap p-lg-6", wrap),
    defineProperty(_cn, "text-" + color, color),
    defineProperty(_cn, "" + size, size),
    _cn),
    className
  );
  var Component = RootComponent || "div";
  return createElement(
    Component,
    _extends({ className: classes }, props),
    children
  );
};

function StandaloneFormPage(props) {
  return createElement(
    "div",
    { className: "page" },
    createElement(
      "div",
      { className: "page-single" },
      createElement(
        "div",
        { className: "container" },
        createElement(
          "div",
          { className: "row" },
          createElement(
            "div",
            { className: "col col-login mx-auto" },
            createElement(
              "div",
              { className: "text-center mb-6" },
              createElement("img", {
                src: "./assets/brand/tabler.svg",
                className: "h-6",
                alt: "",
              })
            ),
            props.children
          )
        )
      )
    )
  );
}

function DefaultErrorPage(props) {
  var _onBackClick = function _onBackClick(event) {
    window.history.back();
    event.preventDefault();
    return true;
  };

  var title = props.title,
    subtitle = props.subtitle,
    details = props.details;

  return createElement(
    Page,
    { className: "text-center" },
    createElement(
      Container,
      null,
      createElement(
        Header.H1,
        { className: "display-1 text-muted mb-5" },
        title
      ),
      createElement(Header.H2, null, subtitle),
      details &&
        createElement(
          Header.H4,
          { className: "text-muted font-weight-normal mb-7" },
          details
        ),
      createElement(
        Button,
        { onClick: _onBackClick, className: "btn-primary" },
        createElement(Icon, { className: "mr-2", name: "arrow-left" }),
        "Go back"
      )
    )
  );
}

function FormCard(props) {
  return createElement(
    Form,
    { className: "card" },
    createElement(
      Card.Body,
      { className: "p-6" },
      createElement(Card.Title, { RootComponent: "div" }, props.title),
      props.children,
      createElement(
        Form.Footer,
        null,
        createElement(
          Button,
          { color: "primary", block: true },
          props.buttonText
        )
      )
    )
  );
}

var FormTextInput = (function(_React$PureComponent) {
  inherits(FormTextInput, _React$PureComponent);

  function FormTextInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormTextInput);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          FormTextInput.__proto__ ||
          Object.getPrototypeOf(FormTextInput)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        value: "",
      }),
      (_this._handleChange = function(event) {
        _this.setState({ value: event.target.value });
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(FormTextInput, [
    {
      key: "render",
      value: function render() {
        var type = this.props.type || "text";
        var _props = this.props,
          label = _props.label,
          placeHolder = _props.placeHolder;
        var value = this.state.value;

        return createElement(
          Form.Group,
          { label: label },
          createElement(Form.Input, {
            onChange: this._handleChange,
            placeholder: placeHolder,
            type: type,
            value: value,
          })
        );
      },
    },
  ]);
  return FormTextInput;
})(PureComponent);

var FormCheckboxInput = (function(_React$PureComponent) {
  inherits(FormCheckboxInput, _React$PureComponent);

  function FormCheckboxInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormCheckboxInput);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          FormCheckboxInput.__proto__ ||
          Object.getPrototypeOf(FormCheckboxInput)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        value: false,
      }),
      (_this._handleChange = function(event) {
        _this.setState(function(prevState, _) {
          return {
            value: !prevState.value,
          };
        });
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(FormCheckboxInput, [
    {
      key: "render",
      value: function render() {
        var label = this.props.label;
        var value = this.state.value;

        return createElement(
          Form.Group,
          null,
          createElement(
            "label",
            { className: "custom-control custom-checkbox" },
            createElement(Form.Input, {
              type: "checkbox",
              onChange: this._handleChange,
              value: value,
            }),
            createElement("span", { className: "custom-control-label" }, label)
          )
        );
      },
    },
  ]);
  return FormCheckboxInput;
})(PureComponent);

export {
  StandaloneFormPage,
  DefaultErrorPage,
  FormCard,
  FormTextInput,
  FormCheckboxInput,
  Container,
  Grid,
  Header,
  Site,
  Card,
  Page,
  Form,
  Nav,
  Alert,
  Icon,
  Avatar,
  Badge,
  Dropdown,
  Button,
  Text,
};
