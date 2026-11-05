"use client";

const FooterNav = ({ links }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {links.map((group) => (
        <div key={group.title} className="space-y-3">
          <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">
            {group.title}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            {group.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-stone hover:text-ivory transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
