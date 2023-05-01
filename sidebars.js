module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'NCM Labs',
      items: [
              {
                type: 'category',
                label: 'Nutanix Self-Service',
                items: ['intro_ncm/create_project',
                        'intro_ncm/create_singlebp_vm',
                        'intro_ncm/create_multiVM_bp',
                        'intro_ncm/marketplace'],
              },
              {
                type: 'category',
                label: 'Intelligent Operations',
                items: ['intelligent_Ops/scale_up',
                        'intelligent_Ops/scale_out',
                        'intelligent_Ops/quarantine',
                        'intelligent_Ops/monitoring'],
              },
              {
                type: 'category',
                label: 'Cloud Native',
                items: ['cloud_native/nke',
                       ],
              },
              {
                type: 'category',
                label: 'Appendix',
                items: ['appendix/devstation'],
              },
      ]
    },
  ]
};
